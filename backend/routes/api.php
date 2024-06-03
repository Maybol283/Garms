<?php

use App\Http\Controllers\InventoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/category', [InventoryController::class, 'categoryItems']);

Route::get('/item', [InventoryController::class, 'Item']);
