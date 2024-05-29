<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ColorSeeder extends Seeder
{
    public function run()
    {
        DB::table('colors')->insert([
            ['name' => 'Red', 'hex_value' => '#FF0000'],
            ['name' => 'Blue', 'hex_value' => '#0000FF'],
            ['name' => 'Black', 'hex_value' => '#000000'],
        ]);
    }
}
