<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class CheckoutController extends Controller
{
    public function index()
    {
        $cart = session()->get('cart', []);
        if (empty($cart)) {
            return redirect()->route('menu.index')->with('warning', 'Keranjang Anda masih kosong.');
        }

        $promo = session()->get('promo', null);
        return view('checkout.index', compact('cart', 'promo'));
    }

    public function process(Request $request)
    {
        $request->validate([
            'customer_name' => 'required|string|max:100',
            'whatsapp' => 'required|string|max:20',
            'order_type' => 'required|in:dine_in,takeaway,delivery',
            'table_or_address' => 'required|string|max:255',
            'payment_method' => 'required|in:qris,transfer,cash'
        ]);

        $cart = session()->get('cart', []);
        if (empty($cart)) {
            return response()->json(['status' => 'error', 'message' => 'Keranjang kosong.'], 400);
        }

        $subtotal = array_sum(array_column($cart, 'subtotal'));
        $promo = session()->get('promo', null);
        $discount = 0;

        if ($promo) {
            $discount = $promo->is_percent ? ($subtotal * ($promo->discount_amount / 100)) : $promo->discount_amount;
        }

        $serviceFee = 1000;
        $totalAmount = max(0, $subtotal - $discount + $serviceFee);
        $orderNumber = 'POCI-' . strtoupper(Str::random(6));

        DB::beginTransaction();
        try {
            $order = Order::create([
                'order_number' => $orderNumber,
                'customer_name' => $request->customer_name,
                'whatsapp' => $request->whatsapp,
                'order_type' => $request->order_type,
                'table_or_address' => $request->table_or_address,
                'payment_method' => $request->payment_method,
                'subtotal' => $subtotal,
                'discount' => $discount,
                'service_fee' => $serviceFee,
                'total_amount' => $totalAmount,
                'status' => 'diterima'
            ]);

            foreach ($cart as $item) {
                OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $item['product_id'],
                    'quantity' => $item['quantity'],
                    'unit_price' => $item['unit_price'],
                    'cup_size' => $item['cup_size'] ?? 'Reguler (16oz)',
                    'sugar_level' => $item['sugar_level'] ?? 'Normal (100%)',
                    'ice_level' => $item['ice_level'] ?? 'Normal Ice',
                    'toppings' => $item['toppings'] ?? [],
                    'notes' => $item['notes'] ?? null,
                    'subtotal' => $item['subtotal']
                ]);
            }

            DB::commit();

            // Clear session cart
            session()->forget(['cart', 'promo']);

            return response()->json([
                'status' => 'success',
                'redirect' => route('order.status', $order->order_number),
                'order_number' => $order->order_number
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }
    }
}
