<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;

class InventoryController extends Controller
{
    public function categoryItems(Request $request)
    {
        $category = $request->query('category');
        $items = Item::where('category', $category)->get();

        return response()->json(['items' => $items]);
    }
}
