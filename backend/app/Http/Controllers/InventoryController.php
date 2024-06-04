<?php

namespace App\Http\Controllers;

use \Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use App\Models\Product;

class InventoryController extends Controller
{
    public function categoryItems(Request $request)
    {
        $category = $request->query('category');
        $products = Product::with(['variants.color', 'variants.size', 'images'])
            ->where('category_name', $category)
            ->get();

        $formattedProducts = $this->formatProducts($products);

        return response()->json(['items' => $formattedProducts]);
    }

    public function Item(Request $request)
    {
        $item = $request->query('item');
        Log::info('Received item:', ['item' => $item]); // Log the received item

        $products = Product::with([
            'variants.color',
            'variants.size',
            'images',
        ])
            ->where('name', $item)
            ->get();


        if ($products->isEmpty()) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        $formattedProducts = $this->formatProducts($products);

        return response()->json($formattedProducts);
    }

    private function formatProducts($products)
    {
        return $products->map(function ($product) {
            $sizes = [];
            $colors = [];
            $images = [];

            foreach ($product->variants as $variant) {
                if ($variant->size) {
                    $sizes[] = [
                        'name' => $variant->size->name,
                        'inStock' => $variant->quantity > 0
                    ];
                }
                $colors[] = [
                    'name' => $variant->color->name,
                    'sample' => $variant->color->sample,
                    'inStock' => $variant->quantity > 0
                ];
            }

            foreach ($product->images as $image) {
                $images[] = [
                    'imageSrc' => $image->image_path,
                    'imageAlt' => $image->image_alt,
                    'primary' => boolval($image->primary)
                ];
            }


            // Combine and remove duplicate sizes, setting inStock for product variants
            $categorySizes = $product->category->sizes;
            $combinedSizes = $this->combineSizes($sizes, $categorySizes);

            return [
                'id' => $product->id,
                'name' => $product->name,
                'price' => (float) $product->price,
                'description' => $product->description,
                'images' => $images,
                'sizes' => $combinedSizes,
                'colors' => $this->uniqueVariants($colors, 'name'),
            ];
        });
    }

    private function uniqueVariants($variants, $key)
    {
        $tempArray = [];
        $keyArray = [];

        foreach ($variants as $variant) {
            if (!in_array($variant[$key], $keyArray)) {
                $keyArray[] = $variant[$key];
                $tempArray[] = $variant;
            }
        }
        return $tempArray;
    }

    // Helper function to combine and de-duplicate sizes
    private function combineSizes($productSizes, $categorySizes)
    {
        $combined = [];
        $productSizeNames = array_map(fn ($size) => $size['name'], $productSizes);

        foreach ($categorySizes as $categorySize) {
            $sizeFound = in_array($categorySize->name, $productSizeNames);
            $combined[] = [
                'name' => $categorySize->name,
                'inStock' => $sizeFound,
            ];
        }

        return $combined;
    }
}
