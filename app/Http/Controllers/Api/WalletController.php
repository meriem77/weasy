<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\WalletResource;
use App\Models\Transaction;
use App\Models\User;
use App\Models\Wallet;
use App\Models\WalletHistory;
use Carbon\Carbon;
use Illuminate\Http\Request;

class WalletController extends Controller
{
// destribute wap for partners
    public function destributeWallet(){
        $walletBalence=Wallet::where('user_id',auth()->user()->id)->first();

        if ($walletBalence->balence>0){

            $ditributePartners= WalletHistory::with('wallet.user:id,fullName,type')
                ->whereHas('wallet.user', function ($query) {
                    return $query->where('type', '=', User::PARTNER_TYPE);
                })
                ->whereHas('wallet', function ($query) {
                    return $query->where('balence', '<', Wallet::MIN_BALENCE_PARTNER);
                })
                ->where('current_value','<',Wallet::MIN_BALENCE_PARTNER)
                ->get();

            foreach ($ditributePartners as $ditributePartner ){
                $Date = Carbon::now();
                $firstDay = new Carbon('first day of this month');

                if ($Date == $firstDay) {
                    $revenueMonth = WalletHistory::where('wallet_id',$ditributePartner->wallet_id)
                        ->where('created_at', '<',Carbon::now()->subMonth())
                        ->sum('current_value');

                    $receiver = Wallet::find($ditributePartner->wallet_id);
                    if (!$receiver) {
                        return response([
                            'success' => false,
                            'data' => "the receiver doesn't exist"
                        ], 422);
                    }

                    $sender = User::find(auth()->user()->id);

                    $transaction = new Transaction();
                    $transaction->amount = $revenueMonth;
                    $transaction->sender_id = $sender->id;
                    $transaction->receiver_id = $receiver->user_id;
                    $transaction->type = Transaction::WAP;
                    $transaction->save();

                    $transaction->receiver->wallet->add($revenueMonth);
                    $transaction->sender->wallet->subtract($revenueMonth);

                    return response()->json(['success' => true]);

                } else {
                    $fdate = $ditributePartner->created_at;
                    $to = Carbon::createFromFormat('Y-m-d H:s:i', $fdate);
                    $from = Carbon::createFromFormat('Y-m-d H:s:i', $Date);
                    $diff_in_days = $to->diffInDays($from);

                    if ($diff_in_days==0){
                        $value=Wallet::BALENCE_PARTNER;
                    }else{
                        $days = 30 - $diff_in_days;
                        $value = intdiv($days * Wallet::BALENCE_PARTNER, $diff_in_days);
                        $value = intdiv($days * Wallet::BALENCE_PARTNER, $diff_in_days);
                    }

                    if($walletBalence->balence>$value){
                        $receiver = Wallet::find($ditributePartner->wallet_id);
                        if (!$receiver) {
                            return response([
                                'success' => false,
                                'data' => "the receiver doesn't exist"
                            ], 422);
                        }

                        $sender = User::find(auth()->user()->id);

                        $transaction = new Transaction();
                        $transaction->amount = $value;
                        $transaction->sender_id = $sender->id;
                        $transaction->receiver_id = $receiver->user_id;
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

        }else{
            return response([
                'success' => false,
                'data' => "Your wallet does'nt contain this amount"
            ], 422);
        }
    }

// get balence
    public function getBalence()
    {
        return response()->json([
            'success' => true,
            'data' => Wallet::Where('user_id',auth()->user()->id)->first(),
        ]);
    }

//Refill balence
    public function refill(Request $request)
    {
        $request->validate([
            'value' => 'required|min:3|max:191',
        ]);

        $balence=Wallet::Where('user_id',auth()->user()->id)->first();
        if ($balence->balence<2000){

            $transaction = new Transaction();
            $transaction->amount = $request->value;
            $transaction->sender_id = auth()->user()->id;
            $transaction->receiver_id = auth()->user()->id;
            $transaction->type = Transaction::WAP;
            $transaction->save();

            $transaction->receiver->wallet->add($request->value);

            Wallet::where('user_id',auth()->user()->id)->Update([
                'balence' => $request->value,
            ]);

            return response()->json(['success' => true]);
        }else{
            return response([
                'success' => false,
                'data' => "Your wallet is already full"
            ], 422);
        }


    }

//get wap for users in month
   public function getBalenceUsers(){
       return response()->json([
           'success' => true,
           'data' => Wallet::with('user:id')
               ->whereHas('wallet', function ($query) {
                   return $query->where('type', '=', 1);
               })
               ->where('created_at', '>=',Carbon::now()->subMonth())
               ->sum('balence')
       ]);
   }

    ////get wap for all in month
    public function getWapAll(){

        return response()->json([
            'success' => true,
            'A2P' => Transaction::with('sender:id,fullName,type')
                ->with('receiver:id,fullName,type')
                ->whereHas('sender', function ($query) {
                    return $query->where('type', '=', User::ADMIN_TYPE);
                })->whereHas('receiver', function ($query) {
                    return $query->where('type', '=', User::PARTNER_TYPE);
                })->where('created_at', '>=',Carbon::now()->subMonth())
                ->sum('amount'),
            'U2U' => Transaction::with('sender:id,fullName,type')
                ->with('receiver:id,fullName,type')
                ->whereHas('sender', function ($query) {
                    return $query->where('type', '=', 1);
                })->whereHas('receiver', function ($query) {
                    return $query->where('type', '=', 1);
                })->where('created_at', '>=',Carbon::now()->subMonth())
                ->sum('amount'),
            'B2C'=>Transaction::with('sender:id,fullName,type')
                ->with('receiver:id,fullName,type')
                ->whereHas('sender', function ($query) {
                    return $query->where('type', '=', 1);
                })->whereHas('receiver', function ($query) {
                    return $query->where('type', '=', User::TRADER_TYPE);
                })->where('created_at', '>=',Carbon::now()->subMonth())
                ->sum('amount'),
            'P2U'=>Transaction::with('sender:id,fullName,type')
                ->with('receiver:id,fullName,type')
                ->whereHas('sender', function ($query) {
                    return $query->where('type', '=', User::PARTNER_TYPE);
                })->whereHas('receiver', function ($query) {
                    return $query->where('type', '=', 1);
                })->where('created_at', '>=',Carbon::now()->subMonth())
                ->sum('amount'),
            'P2B'=>Transaction::with('sender:id,fullName,type')
                ->with('receiver:id,fullName,type')
                ->whereHas('sender', function ($query) {
                    return $query->where('type', '=', User::PARTNER_TYPE);
                })->whereHas('receiver', function ($query) {
                    return $query->where('type', '=', User::TRADER_TYPE);
                })->where('created_at', '>=',Carbon::now()->subMonth())
                ->sum('amount'),
        ]);
    }




    public function userWallet(Request $request){
        //dd($request->user()->id);
        //dd($user->wallet);
        //$wallet = new Wallet();



        /*$wallet->balence = 1000;
        $wallet->user_id = $request->user()->id;
        $wallet->save();*/

        return [
            'success' => true,
            'data' => new WalletResource($request->user()->wallet)
        ];
    }
}

