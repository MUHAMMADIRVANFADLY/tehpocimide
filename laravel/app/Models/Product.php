<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'name',
        'slug',
        'price',
        'price_strike',
        'description',
        'image',
        'badge',
        'badge_type',
        'has_customization',
        'is_available'
    ];

    protected $casts = [
        'price' => 'float',
        'price_strike' => 'float',
        'has_customization' => 'boolean',
        'is_available' => 'boolean'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }
}
