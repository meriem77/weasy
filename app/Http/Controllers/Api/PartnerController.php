<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\User;
use App\Models\Wallet;
use Illuminate\Http\Request;


class PartnerController extends Controller
{
    public function index()
    {
        return response()->json([
            'success' => true,
            'data' =>Wallet::with('user')
                ->whereHas('user', function ($query) {
                    return $query->where('type', '=', User::PARTNER_TYPE);
                })
                ->latest()
                ->paginate(10),
        ]);
    }
    public function count()
    {
        return response()->json([
            'success' => true,
            'data' =>User::Where('type',User::PARTNER_TYPE)->count(),
        ]);
    }

    public function getDitributePartners(){
        return response()->json([
            'success' => true,
            'data' =>Wallet::with('user')
                ->whereHas('user', function ($query) {
                    return $query->where('type', '=', User::PARTNER_TYPE);
                })
                ->where('balence','<',Wallet::MIN_BALENCE_PARTNER)
                ->get(),
        ]);
    }

    public function refillPartner(Request $request,$id){
        $request->validate([
            'value' => 'required|min:3|max:191',
        ]);
        $balence=Wallet::where('user_id',auth()->user()->id)->first();
        $value=$request->value;

        if($balence->balence >= $value){

            $transaction = new Transaction();
            $transaction->amount = $value;
            $transaction->sender_id = auth()->user()->id;
            $transaction->receiver_id = $id;
            $transaction->type = Transaction::WAP;
            $transaction->save();

            $transaction->receiver->wallet->add($value);
            $transaction->sender->wallet->subtract($value);

            return response()->json(['success' => true]);
        }else{
            return response([
                'success' => false,
                'data' => "Your wallet does'nt contain this amount"
            ], 422);
        }
    }



}
