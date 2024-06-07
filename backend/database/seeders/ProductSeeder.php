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
                'id' => 11,
                'name' => 'Basic Tee',
                'description' => 'A basic t-shirt',
                'price' => 19.99,
                'category_name' => 'Shirts',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 12,
                'name' => 'Shirt',
                'description' => 'A nice fresh shirt',
                'price' => 24.49,
                'category_name' => 'Shirts',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 13,
                'name' => 'Checkered Shirt',
                'description' => 'A nice casual shirt',
                'price' => 23.99,
                'category_name' => 'Shirts',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 14,
                'name' => 'Polo Shirt',
                'description' => 'A nice polo shirt',
                'price' => 27.99,
                'category_name' => 'Shirts',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 21,
                'name' => 'Running Shoes',
                'description' => 'Comfortable running shoes',
                'price' => 49.99,
                'category_name' => 'Shoes',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 22,
                'name' => 'Dress Shoes',
                'description' => 'Fancy dress shoes',
                'price' => 59.99,
                'category_name' => 'Shoes',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 23,
                'name' => 'Sliders',
                'description' => 'A cheap pair of sliders',
                'price' => 12.99,
                'category_name' => 'Shoes',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 24,
                'name' => 'Toms',
                'description' => 'A pair of stylish toms',
                'price' => 85.99,
                'category_name' => 'Shoes',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 31,
                'name' => 'Jeans',
                'description' => 'Stylish jeans',
                'price' => 39.99,
                'category_name' => 'Trousers',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 32,
                'name' => 'Trousers',
                'description' => 'Lovely work trousers',
                'price' => 34.99,
                'category_name' => 'Trousers',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 33,
                'name' => 'Linen Trousers',
                'description' => 'A pair of linen trousers',
                'price' => 17.99,
                'category_name' => 'Trousers',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 34,
                'name' => 'Shorts',
                'description' => 'A cosy pair of Shorts',
                'price' => 16.99,
                'category_name' => 'Trousers',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 41,
                'name' => 'Hat',
                'description' => 'A stylish hat',
                'price' => 14.99,
                'category_name' => 'Accessories',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 42,
                'name' => 'Sunglasses',
                'description' => 'A cool pair of sunglasses',
                'price' => 19.99,
                'category_name' => 'Accessories',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 43,
                'name' => 'Belt',
                'description' => 'A fresh looking belt',
                'price' => 8.99,
                'category_name' => 'Accessories',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 44,
                'name' => 'Wallet',
                'description' => 'A fancy new wallet',
                'price' => 14.99,
                'category_name' => 'Accessories',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
