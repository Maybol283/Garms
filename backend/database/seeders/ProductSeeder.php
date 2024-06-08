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
                'id' => 15,
                'name' => 'Graphic Tee',
                'description' => 'A t-shirt with a cool graphic design',
                'price' => 21.99,
                'category_name' => 'Shirts',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 16,
                'name' => 'V-Neck Tee',
                'description' => 'A comfortable V-neck t-shirt',
                'price' => 22.49,
                'category_name' => 'Shirts',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 17,
                'name' => 'Long Sleeve Shirt',
                'description' => 'A versatile long sleeve shirt',
                'price' => 28.99,
                'category_name' => 'Shirts',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 18,
                'name' => 'Henley Shirt',
                'description' => 'A casual Henley shirt',
                'price' => 26.99,
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
                'id' => 25,
                'name' => 'Sneakers',
                'description' => 'Comfortable everyday sneakers',
                'price' => 45.99,
                'category_name' => 'Shoes',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 26,
                'name' => 'Boots',
                'description' => 'Durable and stylish boots',
                'price' => 89.99,
                'category_name' => 'Shoes',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 27,
                'name' => 'Loafers',
                'description' => 'Classic loafers for everyday wear',
                'price' => 54.99,
                'category_name' => 'Shoes',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 28,
                'name' => 'Sandals',
                'description' => 'Comfortable summer sandals',
                'price' => 19.99,
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
                'id' => 35,
                'name' => 'Cargo Pants',
                'description' => 'Functional cargo pants with multiple pockets',
                'price' => 29.99,
                'category_name' => 'Trousers',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 36,
                'name' => 'Chinos',
                'description' => 'Stylish and versatile chinos',
                'price' => 37.99,
                'category_name' => 'Trousers',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 37,
                'name' => 'Joggers',
                'description' => 'Comfortable joggers for casual wear',
                'price' => 24.99,
                'category_name' => 'Trousers',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 38,
                'name' => 'Corduroy Pants',
                'description' => 'Classic corduroy pants',
                'price' => 42.99,
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
            [
                'id' => 45,
                'name' => 'Scarf',
                'description' => 'A warm and stylish scarf',
                'price' => 15.99,
                'category_name' => 'Accessories',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 46,
                'name' => 'Watch',
                'description' => 'A sleek wristwatch',
                'price' => 59.99,
                'category_name' => 'Accessories',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 47,
                'name' => 'Bracelet',
                'description' => 'A trendy bracelet',
                'price' => 12.99,
                'category_name' => 'Accessories',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 48,
                'name' => 'Backpack',
                'description' => 'A stylish and functional backpack',
                'price' => 29.99,
                'category_name' => 'Accessories',
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }
}
