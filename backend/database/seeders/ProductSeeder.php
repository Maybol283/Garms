<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    public function run()
    {
        DB::table('products')->insert([
            [
                'name' => 'Basic Tee',
                'description' => 'A basic t-shirt',
                'price' => 19.99,
                'category_name' => 'Shirts',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Running Shoes',
                'description' => 'Comfortable running shoes',
                'price' => 49.99,
                'category_name' => 'Shoes',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Jeans',
                'description' => 'Stylish jeans',
                'price' => 39.99,
                'category_name' => 'Trousers',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Hat',
                'description' => 'A stylish hat',
                'price' => 14.99,
                'category_name' => 'Accessories',
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }
}
