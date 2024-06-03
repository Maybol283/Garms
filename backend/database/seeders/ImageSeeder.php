<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ImageSeeder extends Seeder
{
    public function run()
    {
        DB::table('product_images')->insert([
            ['product_id' => 1, 'image_path' => 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'image_alt' => 'Front view of Basic Tee', 'primary' => true],
            ['product_id' => 1, 'image_path' => 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'image_alt' => 'Back view of Basic Tee', 'primary' => false],
            ['product_id' => 1, 'image_path' => 'https://images.unsplash.com/photo-1622445272461-c6580cab8755?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'image_alt' => 'Back view of Basic Tee', 'primary' => false],
            ['product_id' => 2, 'image_path' => 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8f4dbcc5f8f041478d6bf895a572fc94_9366/Gazelle_Shoes_Brown_IG6199_01_standard.jpg', 'image_alt' => 'Running Shoes side view', 'primary' => true],
            ['product_id' => 2, 'image_path' => 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5a64ca26266e4d7f8177e5f8c088fa93_9366/Gazelle_Shoes_Brown_IG6199_02_standard_hover.jpg', 'image_alt' => 'Running Shoes Top view', 'primary' => false],
            ['product_id' => 2, 'image_path' => 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f82a12276f9c4c34a1641720e091e3d3_9366/Gazelle_Shoes_Brown_IG6199_03_standard.jpg', 'image_alt' => 'Running Shoes Bottom view', 'primary' => false],
            ['product_id' => 3, 'image_path' => 'https://images.lululemon.com/is/image/lululemon/LM5AYES_035955_1?size=1200,1200', 'image_alt' => 'Front view of Jeans', 'primary' => true],
            ['product_id' => 3, 'image_path' => 'https://images.lululemon.com/is/image/lululemon/LM5AYES_035955_3?size=1200,1200', 'image_alt' => 'Back view of Jeans', 'primary' => false],
            ['product_id' => 3, 'image_path' => 'https://images.lululemon.com/is/image/lululemon/LM5AYES_035955_2?size=1200,1200', 'image_alt' => 'Full view of Jeans', 'primary' => false],
            ['product_id' => 4, 'image_path' => 'https://www.neweracap.co.uk/globalassets/products/a10141_282/12380590/12380590-left.jpg', 'image_alt' => 'Stylish Hat Front View', 'primary' => true],
            ['product_id' => 4, 'image_path' => 'https://www.neweracap.co.uk/globalassets/products/a10141_282/12380590/12380590-right.jpg', 'image_alt' => 'Stylish Hat Alt Front View', 'primary' => false],
            ['product_id' => 4, 'image_path' => 'https://www.neweracap.co.uk/globalassets/products/a10141_282/12380590/12380590-back.jpg', 'image_alt' => 'Stylish Hat Back View', 'primary' => false],
        ]);
    }
}
