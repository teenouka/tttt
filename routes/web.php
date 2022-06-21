<?php
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/deploy', function () {
    Artisan::call('optimize:clear');
    Artisan::call('view:clear');
});

Route::get('/', function () {
    // return view('welcome');
    return view('home');
});

Route::get('/home', function () {
    return view('home');
});

Route::get('{any}', function () {
    return view('home');
});