<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Promo;

class CartController extends Controller
{
    public function index()
    {
        $cart = session()->get('cart', []);
        $promo = session()->get('promo', null);
        return view('cart.index', compact('cart', 'promo'));
    }

    public function add(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
            'cup_size' => 'nullable|string',
            'sugar_level' => 'nullable|string',
            'ice_level' => 'nullable|string',
            'toppings' => 'nullable|array',
            'notes' => 'nullable|string|max:255'
        ]);

        $product = Product::findOrFail($request->product_id);
        $cart = session()->get('cart', []);

        $extraPrice = 0;
        if ($request->cup_size === 'jumbo') {
            $extraPrice += 2000;
        }

        // Toppings calculation
        $toppingPrices = [
            'Cincau Hitam' => 2000,
            'Rainbow Jelly' => 2000,
            'Biji Selasih' => 1000,
            'Cream Cheese Macchiato' => 3000
        ];

        $selectedToppings = $request->toppings ?? [];
        foreach ($selectedToppings as $top) {
            if (isset($toppingPrices[$top])) {
                $extraPrice += $toppingPrices[$top];
            }
        }

        $unitPrice = $product->price + $extraPrice;
        $cartKey = md5($product->id . $request->cup_size . $request->sugar_level . $request->ice_level . implode(',', $selectedToppings) . $request->notes);

        if (isset($cart[$cartKey])) {
            $cart[$cartKey]['quantity'] += $request->quantity;
            $cart[$cartKey]['subtotal'] = $cart[$cartKey]['quantity'] * $unitPrice;
        } else {
            $cart[$cartKey] = [
                'product_id' => $product->id,
                'name' => $product->name,
                'image' => $product->image,
                'unit_price' => $unitPrice,
                'quantity' => $request->quantity,
                'cup_size' => $request->cup_size ?? 'Reguler (16oz)',
                'sugar_level' => $request->sugar_level ?? 'Normal (100%)',
                'ice_level' => $request->ice_level ?? 'Normal Ice',
                'toppings' => $selectedToppings,
                'notes' => $request->notes,
                'subtotal' => $unitPrice * $request->quantity
            ];
        }

        session()->put('cart', $cart);

        return response()->json([
            'status' => 'success',
            'message' => 'Item berhasil ditambahkan ke keranjang!',
            'cartCount' => array_sum(array_column($cart, 'quantity')),
            'cart' => $cart
        ]);
    }

    public function applyPromo(Request $request)
    {
        $code = strtoupper(trim($request->promo_code));
        $promo = Promo::where('code', $code)->where('is_active', 1)->first();

        if (!$promo) {
            return response()->json(['status' => 'error', 'message' => 'Kode voucher tidak valid!'], 422);
        }

        session()->put('promo', $promo);

        return response()->json([
            'status' => 'success',
            'message' => 'Voucher ' . $promo->code . ' berhasil digunakan!',
            'promo' => $promo
        ]);
    }

    public function remove(Request $request)
    {
        $cart = session()->get('cart', []);
        if (isset($cart[$request->cart_key])) {
            unset($cart[$request->cart_key]);
            session()->put('cart', $cart);
        }

        return response()->json(['status' => 'success', 'cart' => $cart]);
    }
}
