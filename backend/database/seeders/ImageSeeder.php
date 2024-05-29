<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ImageSeeder extends Seeder
{
    public function run()
    {
        DB::table('product_images')->insert([
            ['product_id' => 1, 'image_path' => 'images/products/1/image1.jpg', 'image_alt' => 'Front view of Basic Tee', 'primary' => true],
            ['product_id' => 1, 'image_path' => 'images/products/1/image2.jpg', 'image_alt' => 'Back view of Basic Tee', 'primary' => false],
            ['product_id' => 2, 'image_path' => 'images/products/2/image1.jpg', 'image_alt' => 'Running Shoes side view', 'primary' => true],
            ['product_id' => 3, 'image_path' => 'images/products/3/image1.jpg', 'image_alt' => 'Front view of Jeans', 'primary' => true],
            ['product_id' => 4, 'image_path' => 'images/products/4/image1.jpg', 'image_alt' => 'Stylish Hat', 'primary' => true]
        ]);
    }
}
