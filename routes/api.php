<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\{
    AccountController
};
use \Illuminate\Support\Facades\Auth;
use \Illuminate\Http\Request;

Auth::routes(['register' => false, 'reset' => false]);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware(['auth:sanctum'])->group(function () {
    //Account
    Route::post('account', [AccountController::class, 'update']);
});
