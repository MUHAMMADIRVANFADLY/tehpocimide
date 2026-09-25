<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class AdminDashboardController extends Controller
{
    public function index()
    {
        $today = Carbon::today();
        
        $totalOrdersToday = Order::whereDate('created_at', $today)->where('status', 'selesai')->count();
        $totalRevenueToday = Order::whereDate('created_at', $today)->where('status', 'selesai')->sum('total_amount');
        $activeOrdersCount = Order::whereIn('status', ['diterima', 'diproses', 'siap'])->count();

        $recentOrders = Order::with('items.product')->latest()->take(15)->get();
        $products = Product::with('category')->get();

        return view('admin.dashboard', compact('totalOrdersToday', 'totalRevenueToday', 'activeOrdersCount', 'recentOrders', 'products'));
    }

    /**
     * Laporan Penjualan Terintegrasi: Harian, Mingguan, Bulanan
     */
    public function salesReport(Request $request)
    {
        $period = $request->query('period', 'daily'); // 'daily', 'weekly', 'monthly'
        $selectedDate = $request->query('date', Carbon::today()->toDateString());
        $selectedMonth = $request->query('month', Carbon::now()->format('Y-m'));

        $query = Order::with('items.product')->where('status', 'selesai');

        if ($period === 'daily') {
            $query->whereDate('created_at', $selectedDate);
            $chartData = $this->getHourlyChartData($selectedDate);
        } elseif ($period === 'weekly') {
            $sevenDaysAgo = Carbon::now()->subDays(6)->startOfDay();
            $query->whereBetween('created_at', [$sevenDaysAgo, Carbon::now()->endOfDay()]);
            $chartData = $this->getWeeklyChartData();
        } else {
            // Bulanan
            $date = Carbon::createFromFormat('Y-m', $selectedMonth);
            $query->whereYear('created_at', $date->year)->whereMonth('created_at', $date->month);
            $chartData = $this->getMonthlyChartData($date->year, $date->month);
        }

        $orders = $query->latest()->get();
        $totalRevenue = $orders->sum('total_amount');
        $totalOrders = $orders->count();
        $averageOrderValue = $totalOrders > 0 ? round($totalRevenue / $totalOrders) : 0;

        return view('admin.reports.sales', compact(
            'orders',
            'period',
            'selectedDate',
            'selectedMonth',
            'totalRevenue',
            'totalOrders',
            'averageOrderValue',
            'chartData'
        ));
    }

    /**
     * Export Riwayat Transaksi ke format CSV
     */
    public function exportCsv(Request $request)
    {
        $period = $request->query('period', 'daily');
        $fileName = 'Laporan_Penjualan_EsTehPociMide_' . $period . '_' . date('Y-m-d') . '.csv';

        $orders = Order::with('items.product')->where('status', 'selesai')->latest()->get();

        $headers = [
            "Content-type"        => "text/csv; charset=UTF-8",
            "Content-Disposition" => "attachment; filename=$fileName",
            "Pragma"              => "no-cache",
            "Cache-Control"       => "must-revalidate, post-check=0, pre-check=0",
            "Expires"             => "0"
        ];

        $callback = function () use ($orders) {
            $file = fopen('php://output', 'w');
            // Add UTF-8 BOM
            fprintf($file, chr(0xEF).chr(0xBB).chr(0xBF));
            
            fputcsv($file, [
                'No. Pesanan',
                'Tanggal',
                'Jam',
                'Nama Pelanggan',
                'No. WhatsApp',
                'Tipe Pesanan',
                'Meja / Alamat',
                'Menu & Topping',
                'Subtotal (Rp)',
                'Diskon (Rp)',
                'Biaya Layanan (Rp)',
                'Total Akhir (Rp)',
                'Metode Pembayaran',
                'Status'
            ]);

            foreach ($orders as $order) {
                $itemsDetail = [];
                foreach ($order->items as $i) {
                    $itemsDetail[] = "{$i->quantity}x {$i->product->name} ({$i->cup_size})";
                }

                fputcsv($file, [
                    $order->order_number,
                    $order->created_at->format('Y-m-d'),
                    $order->created_at->format('H:i'),
                    $order->customer_name,
                    $order->whatsapp,
                    strtoupper($order->order_type),
                    $order->table_or_address,
                    implode(' | ', $itemsDetail),
                    $order->subtotal,
                    $order->discount,
                    $order->service_fee,
                    $order->total_amount,
                    strtoupper($order->payment_method),
                    strtoupper($order->status)
                ]);
            }

            fclose($file);
        };

        return response()->stream($callback, 200, $headers);
    }

    private function getHourlyChartData($date)
    {
        return DB::table('orders')
            ->select(DB::raw('HOUR(created_at) as hour'), DB::raw('SUM(total_amount) as total'))
            ->whereDate('created_at', $date)
            ->where('status', 'selesai')
            ->groupBy(DB::raw('HOUR(created_at)'))
            ->pluck('total', 'hour')
            ->toArray();
    }

    private function getWeeklyChartData()
    {
        return DB::table('orders')
            ->select(DB::raw('DATE(created_at) as date'), DB::raw('SUM(total_amount) as total'))
            ->where('created_at', '>=', Carbon::now()->subDays(6)->startOfDay())
            ->where('status', 'selesai')
            ->groupBy(DB::raw('DATE(created_at)'))
            ->pluck('total', 'date')
            ->toArray();
    }

    private function getMonthlyChartData($year, $month)
    {
        return DB::table('orders')
            ->select(DB::raw('DAY(created_at) as day'), DB::raw('SUM(total_amount) as total'))
            ->whereYear('created_at', $year)
            ->whereMonth('created_at', $month)
            ->where('status', 'selesai')
            ->groupBy(DB::raw('DAY(created_at)'))
            ->pluck('total', 'day')
            ->toArray();
    }
}
