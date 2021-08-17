<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AccountRequest;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;

class AccountController extends Controller
{
    public function update(AccountRequest $request)
    {
        Admin::find(auth()->user()->id)->update(['password' => Hash::make($request->new_password)]);
        return true;
    }
}
