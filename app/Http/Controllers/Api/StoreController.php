<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\SendPasswordMailToPartner;
use App\Models\Partner;
use App\Models\Store;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class StoreController extends Controller
{
    public function getStores(){
        return response()->json([
            'success' => true,
            'data' => Store::with('user:id,fullName','category:id,name')
             ->where('validated',0)->paginate(10),
        ]);
    }


    public function confirmStore($id){

        $store=Store::find($id)->with('user:id,fullName,')->first();
        $password = Str::random(12);
        $details = [
            'Full_Name' => $store->user->fullName,
            'password' => $password,
        ];
        Mail::to($store->email)->send(new SendPasswordMailToPartner($details));

        Store::where('id',$id)->update([
            'validated' => 1,
            'password' => Hash::make($password),
        ]);
        //send notification
        if($store){
            $tokens = array();
            $user = User::find($store->user->id);
            $tokens[] = $user->device_token;
            $SERVER_API_KEY = env('SERVER_KEY_TARGET_USERS');
            $data = [
                "registration_ids" => $tokens,
                "notification" => [
                    "title" => 'Waza',
                    "body" => 'Votre store a été approuvé ',
                    'image' => 'https://dashboard.waza.fun/waza-small.png',
                    'sound' => true,
                ]
            ];
            $dataString = json_encode($data);
            $headers = [
                'Authorization: key=' . $SERVER_API_KEY,
                'Content-Type: application/json',
            ];
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $dataString);
            return curl_exec($ch);
        }

        return response()->json(['success' => true]);

    }
}
