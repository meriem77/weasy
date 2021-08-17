<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LeagueController;
use App\Http\Controllers\Api\ClubController;
use App\Http\Controllers\Api\VersionController;
use App\Http\Controllers\Api\RoleController;
use App\Http\Controllers\Api\FafController;
use App\Http\Controllers\Api\AccountController;
use \Illuminate\Support\Facades\Auth;
use \Illuminate\Http\Request;

Auth::routes(['register' => false, 'reset' => false]);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//Get app version
Route::get('version', [VersionController::class, 'index']);
//Group
Route::middleware(['auth:sanctum'])->group(function () {
    //Faf
    Route::get('faf', [FafController::class, 'index']);
    Route::post('faf/update', [FafController::class, 'update']);
    Route::post('faf/update-avatar', [FafController::class, 'updateAvatar']);
    //Leagues
    Route::resource('leagues', LeagueController::class)->except('update');
    Route::post('leagues/{league}', [LeagueController::class, 'update']);
    //Clubs
    Route::resource('clubs', ClubController::class)->except('update');
    Route::post('clubs/{club}', [ClubController::class, 'update']);
    Route::post('search-clubs', [ClubController::class, 'search']);
    //Roles
    Route::resource('roles', RoleController::class)->except('create');
    //Version
    Route::post('version/update', [VersionController::class, 'update']);
    //Account
    Route::post('account', [AccountController::class, 'update']);
});
