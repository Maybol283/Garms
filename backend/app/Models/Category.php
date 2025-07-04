<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function products()
    {
        return $this->hasMany(Product::class, 'category_name', 'name');
    }

    public function sizes()
    {
        return $this->hasMany(Size::class, 'category_name', 'name');
    }
}
