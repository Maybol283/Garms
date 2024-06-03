<?php

namespace App\Http\Controllers;

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

        $formattedProducts = $products->map(function ($product) {
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

            return [
                'id' => $product->id,
                'name' => $product->name,
                'price' => (float) $product->price,
                'description' => $product->description,
                'images' => $images,
                'sizes' => uniqueVariants($sizes, 'name'),
                'colors' => uniqueVariants($colors, 'name'),
            ];
        });

        return response()->json(['items' => $formattedProducts]);
    }

    public function Item(Request $request)
    {
        $item = $request->query('item');
    }
}

function uniqueVariants($variants, $key)
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
