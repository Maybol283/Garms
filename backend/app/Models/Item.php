<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    // Define the relationship to the Item model
    public function items()
    {
        return $this->hasMany(Item::class, 'category_name', 'name');
    }
}
