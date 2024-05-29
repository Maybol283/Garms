<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SizeSeeder extends Seeder
{
    public function run()
    {
        DB::table('sizes')->insert([
            ['name' => 'XS', 'size_type' => 'shirt'],
            ['name' => 'S', 'size_type' => 'shirt'],
            ['name' => 'M', 'size_type' => 'shirt'],
            ['name' => 'L', 'size_type' => 'shirt'],
            ['name' => 'XL', 'size_type' => 'shirt'],
            ['name' => '6', 'size_type' => 'shoe'],
            ['name' => '7', 'size_type' => 'shoe'],
            ['name' => '8', 'size_type' => 'shoe'],
            ['name' => '28', 'size_type' => 'trouser'],
            ['name' => '30', 'size_type' => 'trouser'],
            ['name' => '32', 'size_type' => 'trouser'],
            ['name' => '34', 'size_type' => 'trouser'],
        ]);
    }
}
