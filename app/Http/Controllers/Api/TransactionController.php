<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\notification;
use App\Models\Transaction;

use App\Models\User;
use App\Models\Wallet;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    //Admin Transactions
    public function upgrade($id){
        $receiver = User::find($id);

        if(!$receiver){
            return response([
                'success' => false,
                'data' => "the receiver doesn't exist"
            ], 422);
        }

        $sender = User::find(auth()->user()->id);

        if($sender->wallet->balence < wallet::BALENCE_PARTNER){
            return [
                'success' => false,
                'data' => "Your wallet does'nt contain this amount"
            ];
        }
        $transaction = new Transaction();
        $transaction->amount = Wallet::BALENCE_PARTNER;
        $transaction->sender_id = $sender->id;
        $transaction->receiver_id = $receiver->id;
        $transaction->type = Transaction::WAP;
        $transaction->save();

        $transaction->receiver->wallet->add(Wallet::BALENCE_PARTNER);
        $transaction->sender->wallet->subtract(Wallet::BALENCE_PARTNER);
        User::where('id',$receiver->id)->Update([
            'type' => 2,
        ]);
        return response()->json(['success' => true]);

    }

    //Partner Transactions
    public function getPartnersTransations()
    {
        return response()->json([
            'success' => true,
            'data' => Transaction::with('sender:id,fullName,type')
                ->with('receiver:id,fullName,type')
                ->whereHas('sender', function ($query) {
                    return $query->where('type', '=', User::PARTNER_TYPE);
                })->latest()->paginate(10),
        ]);

    }

    // User Transactions
    public function getUserTransations()
    {
        return response()->json([
            'success' => true,
            'data' => Transaction::with('sender:id,fullName,type')
                ->with('receiver:id,fullName,type')
                ->whereHas('sender', function ($query) {
                    return $query->where('type', '=', 1);
                })->whereHas('receiver', function ($query) {
                    return $query->where('type', '=', 1);
                })
                ->latest()
                ->paginate(10),
        ]);

    }
    public function getTransactionsUsersCount()
    {
        return response()->json([
            'success' => true,
            'data' => Transaction::with('sender:id,fullName,type')
                ->with('receiver:id,fullName,type')
                ->whereHas('sender', function ($query) {
                    return $query->where('type', '=', 1);
                })->whereHas('receiver', function ($query) {
                    return $query->where('type', '=', 1);
                })
                ->count(),
        ]);
    }




    // Trader Transactions
    public function getTradersTransations(){
        return response()->json([
            'success' => true,
            'data' => Transaction::with('sender:id,fullName,type')
                ->with('receiver:id,fullName,type')
                ->whereHas('sender', function ($query) {
                    return $query->where('type', '=', User::TRADER_TYPE);
                })->whereHas('receiver', function ($query) {
                    return $query->where('type', '=', User::TRADER_TYPE);
                })
                ->latest()
                ->paginate(10),
        ]);

    }
    public function getTransactionsTradersCount()
    {
        return response()->json([
            'success' => true,
            'data' => Transaction::with('sender:id,fullName,type')
                ->with('receiver:id,fullName,type')
                ->whereHas('sender', function ($query) {
                    return $query->where('type', '=', User::TRADER_TYPE);
                })->whereHas('receiver', function ($query) {
                    return $query->where('type', '=', 1);
                })
                ->count(),
        ]);
    }

    //Count of transactions per month
    public function getCountTransactionsMonth(){

        return response()->json([
            'success' => true,
            'A2P' => Transaction::with('sender:id,fullName,type')
                ->with('receiver:id,fullName,type')
                ->whereHas('sender', function ($query) {
                    return $query->where('type', '=', User::ADMIN_TYPE);
                })->whereHas('receiver', function ($query) {
                    return $query->where('type', '=', User::PARTNER_TYPE);
                })->where('created_at', '>=',Carbon::now()->subMonth())
                ->count(),
            'U2U' => Transaction::with('sender:id,fullName,type')
                ->with('receiver:id,fullName,type')
                ->whereHas('sender', function ($query) {
                    return $query->where('type', '=', 1);
                })->whereHas('receiver', function ($query) {
                    return $query->where('type', '=', 1);
                })->where('created_at', '>=',Carbon::now()->subMonth())
                ->count(),
            'B2C'=>Transaction::with('sender:id,fullName,type')
                ->with('receiver:id,fullName,type')
                ->whereHas('sender', function ($query) {
                    return $query->where('type', '=', 1);
                })->whereHas('receiver', function ($query) {
                    return $query->where('type', '=', User::TRADER_TYPE);
                })->where('created_at', '>=',Carbon::now()->subMonth())
                ->count(),
            'P2U'=>Transaction::with('sender:id,fullName,type')
                ->with('receiver:id,fullName,type')
                ->whereHas('sender', function ($query) {
                    return $query->where('type', '=', User::PARTNER_TYPE);
                })->whereHas('receiver', function ($query) {
                    return $query->where('type', '=', 1);
                })->where('created_at', '>=',Carbon::now()->subMonth())
                ->count(),
            'P2B'=>Transaction::with('sender:id,fullName,type')
                ->with('receiver:id,fullName,type')
                ->whereHas('sender', function ($query) {
                    return $query->where('type', '=', User::PARTNER_TYPE);
                })->whereHas('receiver', function ($query) {
                    return $query->where('type', '=', User::TRADER_TYPE);
                })->where('created_at', '>=',Carbon::now()->subMonth())
                ->count(),
        ]);
    }







    public function flexy(Request $request){

//        $validator = Validator::make($request->all(), [
//            'amount' => 'required',
//            'receiver_id' => 'required|int',
//        ]);

        $receiver = User::find($request->receiver_id);
        if(!$receiver){
            return response([
                'success' => false,
                'data' => "the receiver doesn't exist"
            ], 422);
        }

//        if ($validator->fails()){
//            return response([
//                'success' => false,
//                'data' => $validator->errors()->all()
//            ], 422);
//        }

        $sender = $request->user();

        if($sender->wallet->balence < $request->amount){
            return [
                'success' => false,
                'data' => "Your wallet does'nt contain this amount"
            ];
        }

        $transaction = new Transaction();
        $transaction->amount = $request->amount;
        $transaction->sender_id = $sender->id;
        $transaction->receiver_id = $request->receiver_id;
        $transaction->type = Transaction::WAP;
        $transaction->save();

        $transaction->receiver->wallet->add($request->amount);
        $transaction->sender->wallet->subtract($request->amount);

        $notification = notification::create([
            'user_id' => $receiver->id,
            'morphable_id' => $user->wallet->id,
            'type' => notification::WALLET_CHANGED,
            'is_read' => 0
        ]);

        return [
            'success' => true,
            'data' => "Transaction with succuess",
            'notification_id' => $notification->id
        ];
    }

    public function walletTransactions(Request $request){
        $user = $request->user();

        $transactions = Transaction::where('sender_id', $user->id)
            ->orWhere('receiver_id', $user->id)
            ->orderBy('created_at', 'DESC')
            ->get();
        $data = [];

        foreach ($transactions as $transaction) {
            $direction = null;
            $other_user = null;

            if($user->id == $transaction->sender_id){
                /*$other_user = [
                    'id'=> $transaction->receiver->id,
                    'name' => $transaction->receiver->fullName,
                    'picture' => $transaction->receiver->picture
                ];*/
                $direction = "out";
                $other_user = $transaction->receiver;
            }else{
                if($user->id == $transaction->receiver_id){
                    /*$other_user = [
                        'id'=> $transaction->sender->id,
                        'name' => $transaction->sender->fullName,
                        'picture' => $transaction->sender->picture
                    ];*/
                    $direction = "in";
                    $other_user = $transaction->sender;
                }
            }



            $data[] = [
                'id' => $transaction->id,
                'amount' => $transaction->amount,
                'direction' => $direction,
                'user_id' => $other_user->id,
                'user_name' => $other_user->fullName,
                'user_picture' => $other_user->picture,
                'date' => $transaction->created_at->format('Y-m-d')
            ];
        }

        return $data;
    }

    public function graph(Request $request){
        $user = $request->user();

        $data = [];

        $states = $user->wallet->history;

        $i = 0;

        foreach ($user->wallet->history as $state) {
            $date = $state->created_at->format('Y-m-d');
            if($i== 0){
                $data[] = [
                    "amount" => $state->current_value,
                    "date" => $date
                ];
                $i++;
            }else{
                if(!array_key_exists("date", $data[$i - 1])){
                    dd($data[$i - 1]);
                }
                // make unique date in the date
                $last_date = $data[$i - 1]["date"];

                if($last_date == $date){
                    $data[$i - 1]["amount"] = $state->current_value;
                }else{
                    $data[] = [
                        "amount" => $state->current_value,
                        "date" => $date
                    ];
                    $i++;
                }
            }

        }

        return [
            'success' => true,
            'data' => [
                "wallet_history" => $data,
                "depences" => $this->getDepencesGraph($request),
                "max_balence" => Wallet::MAX_BALENCE
            ]
        ];

    }

    public function getDepencesGraph(Request $request){
        $user = $request->user();

        $data = [];

        $states = $user->wallet->history;

        $i = 0;

        foreach ($user->wallet->history as $state) {
            if($state->current_value < $state->old_value){
                $depence = $state->old_value - $state->current_value;

                $date = $state->created_at->format('Y-m-d');
                if(count($data) > 0){
                    $last_date = $data[count($data) -1]["date"];
                    if($last_date == $date){
                        $data[count($data) -1]["amount"] = $depence;
                    }else{
                        $data[] = [
                            "amount" => $depence,
                            "date" => $date
                        ];
                    }
                }else{
                    $data[] = [
                        "amount" => $depence,
                        "date" => $date
                    ];
                }


            }

        }

        return $data;
    }

    public function maxbalence(){
        return [
            'success' => true,
            'data' => Wallet::MAX_BALENCE
        ];

    }
}
