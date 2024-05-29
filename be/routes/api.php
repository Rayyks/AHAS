<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BloggerController;
use App\Http\Controllers\ServiceController;
use App\Http\Middleware\RoleMiddleware;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Public routes
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::get('/blogs', [BloggerController::class, 'index']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {

    // User routes with role middleware
    Route::middleware(['auth:sanctum', RoleMiddleware::class . ':admin'])->group(function () {
        Route::get('/users', [UserController::class, 'index']);
        Route::get('/users/{id}', [UserController::class, 'show']);
        Route::post('/users', [UserController::class, 'store']);
        Route::put('/users/{id}', [UserController::class, 'update']);
        Route::delete('/users/{id}', [UserController::class, 'destroy']);
    });

    // Customer routes with role middleware
    Route::middleware(['auth:sanctum', RoleMiddleware::class . ':customer'])->group(function () {
        Route::get('/customer', [CustomerController::class, 'show']); // Get the authenticated customer
        Route::post('/customer', [CustomerController::class, 'store']); // Create a new customer (if needed)
        Route::put('/customer', [CustomerController::class, 'update']); // Update the authenticated customer
        Route::delete('/customer', [CustomerController::class, 'destroy']); // Delete the authenticated customer
    });

    // Admin routes with role middleware
    Route::group(['middleware' => RoleMiddleware::class . ':admin'], function () {
        Route::get('/admins', [AdminController::class, 'index']);
        Route::get('/admins/{id}', [AdminController::class, 'show']);
        Route::post('/admins', [AdminController::class, 'store']);
        Route::put('/admins/{id}', [AdminController::class, 'update']);
        Route::delete('/admins/{id}', [AdminController::class, 'destroy']);
    });

    // Blogger routes with role middleware
    Route::group(['middleware' => RoleMiddleware::class . ':blogger'], function () {
        Route::post('/blogs', [BloggerController::class, 'store']);
        Route::put('/blogs/{blog}', [BloggerController::class, 'update']);
        Route::delete('/blogs/{blog}', [BloggerController::class, 'destroy']);
    });

    // Blog routes
    Route::get('/blogs/{blog}', [BloggerController::class, 'show']);

    // Service routes
    Route::get('/services', [ServiceController::class, 'index']);
    Route::get('/services/{id}', [ServiceController::class, 'show']);
    Route::post('/services', [ServiceController::class, 'store']);
    Route::put('/services/{id}', [ServiceController::class, 'update']);
    Route::delete('/services/{id}', [ServiceController::class, 'destroy']);
<<<<<<< HEAD

=======
    // Service routes
    Route::get('/services-history', [ServiceController::class, 'serviceHistory']);
>>>>>>> 6788be4aa31e0f54a7f6f83c0cb67a984af356b3


    // Logout route
    Route::post('/logout', [AuthController::class, 'logout']);
});

// Test route for authenticated user
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
