<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ColorSeeder extends Seeder
{
    public function run()
    {
        DB::table('colors')->insert([
            ['name' => 'Red', 'sample' => 'red-500'],
            ['name' => 'Blue', 'sample' => 'blue-500'],
            ['name' => 'Black', 'sample' => 'black'],
        ]);
    }
}
