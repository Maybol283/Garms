<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'price', 'category_name'];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_name', 'name');
    }

    public function variants()
    {
        return $this->hasMany(ProductVariant::class);
    }

    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }
}
