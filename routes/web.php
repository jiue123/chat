<?php

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::group([
    'as' => 'chat.',
], function() {
    Route::resource('chat', 'ChatController');
    Route::post('getInfoUserOnline', 'ChatController@getInfoUserOnline');
});

Route::group([
    'prefix' => 'client',
    'as' => 'client.',
], function() {
    Route::resource('client', 'ClientController');
});
