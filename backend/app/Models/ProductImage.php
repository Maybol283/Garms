<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    use HasFactory;

    protected $fillable = ['image_path', 'image_alt', 'product_id', 'primary'];

    public function products()
    {
        $this->BelongsTo(Product::class);
    }
}
