<?php

namespace App\Http\Controllers;

use \Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class InventoryController extends Controller
{
    public function categoryItems(Request $request)
    {
        try {
            $category = $request->query('category');
            Log::info('Fetching category items', ['category' => $category]);

            $products = Product::with(['variants.color', 'variants.size', 'images', 'category'])
                ->where('category_name', $category)
                ->get();

            Log::info('Found products', ['count' => $products->count()]);

            if ($products->isEmpty()) {
                Log::warning('No products found for category', ['category' => $category]);
                return response()->json(['items' => []], 200);
            }

            $formattedProducts = $this->formatProducts($products);
            return response()->json(['items' => $formattedProducts]);
        } catch (\Exception $e) {
            Log::error('Error in categoryItems', [
                'error' => $e->getMessage(),
                'category' => $request->query('category'),
                'trace' => $e->getTraceAsString()
            ]);
            return response()->json([
                'error' => 'Internal server error',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function Item(Request $request)
    {
        try {
            $item = $request->query('item');
            Log::info('Fetching item', ['item' => $item]);

            $products = Product::with([
                'variants.color',
                'variants.size',
                'images',
                'category'
            ])
                ->where('name', $item)
                ->get();

            if ($products->isEmpty()) {
                Log::warning('Item not found', ['item' => $item]);
                return response()->json(['message' => 'Item not found'], 404);
            }

            $formattedProducts = $this->formatProducts($products);
            return response()->json($formattedProducts);
        } catch (\Exception $e) {
            Log::error('Error in Item', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            return response()->json([
                'error' => 'Internal server error',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    private function formatProducts($products)
    {
        try {
            return $products->map(function ($product) {
                try {
                    $sizes = [];
                    $colors = [];
                    $images = [];

                    // Check if category relationship exists
                    if (!$product->category) {
                        Log::warning('Product category not found', [
                            'product_id' => $product->id,
                            'product_name' => $product->name,
                            'category_name' => $product->category_name
                        ]);
                        return null;
                    }

                    foreach ($product->variants as $variant) {
                        if ($variant->size) {
                            $sizes[] = [
                                'name' => $variant->size->name,
                                'inStock' => $variant->quantity > 0
                            ];
                        }

                        if ($variant->color) {
                            $colors[] = [
                                'name' => $variant->color->name,
                                'sample' => $variant->color->sample,
                                'inStock' => $variant->quantity > 0
                            ];
                        }
                    }

                    foreach ($product->images as $image) {
                        $images[] = [
                            'imageSrc' => $image->image_path,
                            'imageAlt' => $image->image_alt,
                            'primary' => boolval($image->primary)
                        ];
                    }

                    $uniqueSizes = $this->uniqueVariants($sizes, 'name');
                    $uniqueColors = $this->uniqueVariants($colors, 'name');

                    $categorySizes = $product->category->sizes ?? [];
                    $finalSizes = $this->combineSizes($uniqueSizes, $categorySizes);

                    return [
                        'id' => $product->id,
                        'name' => $product->name,
                        'images' => $images,
                        'imageAlt' => $product->description,
                        'price' => $product->price,
                        'sizes' => $finalSizes,
                        'colors' => $uniqueColors,
                        'href' => "/product/{$product->id}",
                        'description' => $product->description
                    ];
                } catch (\Exception $e) {
                    Log::error('Error formatting product', [
                        'product_id' => $product->id,
                        'error' => $e->getMessage()
                    ]);
                    return null;
                }
            })->filter()->values()->toArray();
        } catch (\Exception $e) {
            Log::error('Error in formatProducts', ['error' => $e->getMessage()]);
            throw $e;
        }
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
        $productSizeNames = array_map(fn($size) => $size['name'], $productSizes);

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
