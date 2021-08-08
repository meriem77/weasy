<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\LeagueController;
use App\Http\Controllers\Api\ClubController;
use App\Http\Controllers\Api\VersionController;
use App\Http\Controllers\Api\RoleController;
use App\Http\Controllers\Api\FafController;

//Login
Route::post('login', [AuthController::class, 'login'])->name('login');

//Group
Route::middleware(['auth:sanctum'])->group(function () {
    //logout
    Route::post('logout', [AuthController::class, 'logout']);
    //faf
    Route::get('faf', [FafController::class, 'index']);
    Route::post('faf/update', [FafController::class, 'update']);
    Route::post('faf/update-avatar', [FafController::class, 'updateAvatar']);
    //leagues
    Route::resource('leagues', LeagueController::class)->except(['create', 'show', 'destroy', 'update']);
    Route::post('leagues/{league}', [LeagueController::class, 'update']);
    //clubs
    Route::resource('clubs', ClubController::class)->except(['create', 'show', 'destroy', 'update']);
    Route::post('clubs/{club}', [ClubController::class, 'update']);
    //roles
    Route::resource('roles', RoleController::class)->except(['create', 'show']);
    //version
    Route::get('version', [VersionController::class, 'index']);
    Route::post('version/update', [VersionController::class, 'update']);
});
