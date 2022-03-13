<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;

use App\Models\Wallet;
use Illuminate\Http\Request;
use App\Models\User;


class UserController extends Controller
{
    public function index()
    {
        return response()->json([
            'success' => true,
            'data' => User::where('type',0)->latest()->paginate(10),
        ]);
    }
    public function edit($id){
        return response()->json([
            'success' => true,
            'data' => User::find($id),
        ]);
    }


    public function usersCount()
    {
        return response()->json([
            'success' => true,
            'data' =>User::where('type',1)->count(),
        ]);
    }
    public function destroy($id){
        User::where('id',$id)->update([
            'type' => 0,
        ]);
        Wallet::where('user_id',$id)->delete();
        return response()->json(['success' => true]);
    }

    //trader
    public function tradersCount()
    {
        return response()->json([
            'success' => true,
            'data' =>User::where('type',3)->count(),
        ]);
    }

}
