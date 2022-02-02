<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\{
    AccountController,
    AdminController,
    PartnerController,
    WazaPointController,
    UserController,
    TransactionController,
    WalletController,
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
    //wazaPoint
    Route::get('wazaPoint', [WazaPointController::class, 'index']);
    Route::post('wazaPoint', [WazaPointController::class, 'store']);

    //users
    Route::get('users', [UserController::class, 'index']);
    Route::post('users/{user}', [UserController::class, 'update']);
    Route::post('userDelete/{user}', [UserController::class, 'destroy']);
    Route::get('UsersCount', [UserController::class, 'usersCount']);
    Route::get('tradersCount', [UserController::class, 'tradersCount']);

    //partner
    Route::resource('partners', PartnerController::class)->except('edit','update');
    Route::get('partners/{partner}/edit', [PartnerController::class, 'edit']);
    Route::get('partnersCount', [PartnerController::class, 'count']);
    Route::post('partners/{partner}', [PartnerController::class, 'update']);
    Route::get('ditributePartners', [PartnerController::class, 'getDitributePartners']);
    Route::post('refillPartner/{partner}', [PartnerController::class, 'refillPartner']);



    //admins
    Route::resource('admins', AdminController::class)->except('edit','update');
    Route::get('admins/{admin}/edit', [AdminController::class, 'edit']);
    Route::post('admins/{admin}', [AdminController::class, 'update']);

    //Admin Transaction
    Route::post('upgradeUser/{upgradeUser}', [TransactionController::class, 'upgrade']);

    //partner Transactions
    Route::get('transactionsPartners', [TransactionController::class, 'getPartnersTransations']);

    //User Transactions
    Route::get('transactionsUsers', [TransactionController::class, 'getUserTransations']);
    Route::get('TransactionsUsersCount', [TransactionController::class, 'getTransactionsUsersCount']);

    //Trader Transactions
    Route::get('transactionsTraders', [TransactionController::class, 'getTradersTransations']);
    Route::get('transactionsTradersCount', [TransactionController::class, 'getTransactionsTradersCount']);

    //wallet
    Route::get('balence', [WalletController::class, 'getBalence']);
    Route::post('refill', [WalletController::class, 'refill']);
    Route::post('destributeWallet', [WalletController::class, 'destributeWallet']);

    //Statistic
    Route::get('TransactionsCountMonth', [TransactionController::class, 'getCountTransactionsMonth']);
    Route::get('BalenceCountMonth', [WalletController::class, 'getWapAll']);

});
