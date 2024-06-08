<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImagesTable extends Migration
{
    public function up()
    {
        Schema::create('product_images', function (Blueprint $table) {
            $table->id();
            $table->string('image_path', 1000);
            $table->string('image_alt');
            $table->boolean('primary')->default(false);
            $table->foreignId('product_id')->constrained('products')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('product_images');
    }
}
