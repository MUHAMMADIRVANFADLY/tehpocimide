<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use App\Models\Promo;

class HomeController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        $bestSellers = Product::where('badge_type', 'bestseller')->where('is_available', 1)->take(4)->get();
        $products = Product::where('is_available', 1)->get();
        $promos = Promo::where('is_active', 1)->get();

        return view('home', compact('categories', 'bestSellers', 'products', 'promos'));
    }

    public function promo()
    {
        $promos = Promo::where('is_active', 1)->get();
        return view('promo', compact('promos'));
    }

    public function about()
    {
        return view('about');
    }

    public function contact()
    {
        return view('contact');
    }
}
