<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;
use App\Models\ProductVariant;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ProductVariant>
 */
class ProductVariantFactory extends Factory
{

    protected $model = ProductVariant::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Retrieve a random product
        $product = Product::inRandomOrder()->first();
        $category = $product->category_name;

        // Define sizes based on category
        switch ($category) {
            case 'Shirts':
                $sizes = range(1, 5);
                break;
            case 'Shoes':
                $sizes = range(6, 10);
                break;
            case 'Trousers':
                $sizes = range(11, 14);
                break;
            case 'Accessories':
                $sizes = [null];
                break;
        }

        return [
            'product_id' => $product->id,
            'color_id' => $this->faker->numberBetween(1, 7),
            'size_id' => $this->faker->randomElement($sizes),
            'quantity' => $this->faker->numberBetween(20, 200),
        ];
    }
}
