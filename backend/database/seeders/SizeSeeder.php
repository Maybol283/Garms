<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SizeSeeder extends Seeder
{
    public function run()
    {
        DB::table('sizes')->insert([
            ['name' => 'XS', 'category_name' => 'Shirts'],
            ['name' => 'S', 'category_name' => 'Shirts'],
            ['name' => 'M', 'category_name' => 'Shirts'],
            ['name' => 'L', 'category_name' => 'Shirts'],
            ['name' => 'XL', 'category_name' => 'Shirts'],
            ['name' => '6', 'category_name' => 'Shoes'],
            ['name' => '7', 'category_name' => 'Shoes'],
            ['name' => '8', 'category_name' => 'Shoes'],
            ['name' => '9', 'category_name' => 'Shoes'],
            ['name' => '10', 'category_name' => 'Shoes'],
            ['name' => '28', 'category_name' => 'Trousers'],
            ['name' => '30', 'category_name' => 'Trousers'],
            ['name' => '32', 'category_name' => 'Trousers'],
            ['name' => '34', 'category_name' => 'Trousers'],
        ]);
    }
}
