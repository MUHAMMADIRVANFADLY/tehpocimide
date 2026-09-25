<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_number',
        'customer_name',
        'whatsapp',
        'order_type',
        'table_or_address',
        'payment_method',
        'subtotal',
        'discount',
        'service_fee',
        'total_amount',
        'status'
    ];

    protected $casts = [
        'subtotal' => 'float',
        'discount' => 'float',
        'service_fee' => 'float',
        'total_amount' => 'float'
    ];

    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }
}
