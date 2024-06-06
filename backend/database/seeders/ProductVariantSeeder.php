<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductVariantSeeder extends Seeder
{
    public function run()
    {
        DB::table('product_variants')->insert([
            ['product_id' => 1, 'color_id' => 1, 'size_id' => 1, 'quantity' => 100],  // Red, XS
            ['product_id' => 1, 'color_id' => 1, 'size_id' => 2, 'quantity' => 150],  // Red, S
            ['product_id' => 1, 'color_id' => 2, 'size_id' => 3, 'quantity' => 100],  // Blue, M
            ['product_id' => 1, 'color_id' => 3, 'size_id' => 4, 'quantity' => 200],  // Black, L
            ['product_id' => 1, 'color_id' => 5, 'size_id' => 4, 'quantity' => 200],  // White, L

            ['product_id' => 2, 'color_id' => 1, 'size_id' => 6, 'quantity' => 50],   // Red, Size 6
            ['product_id' => 2, 'color_id' => 4, 'size_id' => 7, 'quantity' => 60],   // Beige, Size 7
            ['product_id' => 2, 'color_id' => 2, 'size_id' => 8, 'quantity' => 70],   // Blue, Size 8
            ['product_id' => 2, 'color_id' => 6, 'size_id' => 8, 'quantity' => 70],   // Green, Size 8
            ['product_id' => 3, 'color_id' => 1, 'size_id' => 9, 'quantity' => 40],   // Red, Waist 28
            ['product_id' => 3, 'color_id' => 2, 'size_id' => 10, 'quantity' => 30],  // Blue, Waist 30
            ['product_id' => 3, 'color_id' => 3, 'size_id' => 11, 'quantity' => 20],  // Black, Waist 32
            ['product_id' => 3, 'color_id' => 4, 'size_id' => 11, 'quantity' => 20],  // Beige, Waist 32
            ['product_id' => 4, 'color_id' => 1, 'size_id' => NULL, 'quantity' => 50],  // Red
            ['product_id' => 4, 'color_id' => 2, 'size_id' => NULL, 'quantity' => 75],  // Blue
            ['product_id' => 4, 'color_id' => 3, 'size_id' => NULL, 'quantity' => 30],  // Black
        ]);
    }
}
