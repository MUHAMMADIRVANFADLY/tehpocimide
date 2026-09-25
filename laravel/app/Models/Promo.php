<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Promo extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'discount_amount',
        'is_percent',
        'min_order',
        'description',
        'is_active'
    ];

    protected $casts = [
        'discount_amount' => 'float',
        'is_percent' => 'boolean',
        'min_order' => 'float',
        'is_active' => 'boolean'
    ];
}
