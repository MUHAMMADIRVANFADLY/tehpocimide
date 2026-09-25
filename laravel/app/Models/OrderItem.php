<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'product_id',
        'quantity',
        'unit_price',
        'cup_size',
        'sugar_level',
        'ice_level',
        'toppings',
        'notes',
        'subtotal'
    ];

    protected $casts = [
        'unit_price' => 'float',
        'subtotal' => 'float',
        'toppings' => 'array'
    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
