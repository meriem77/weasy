<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;
    public const PARTNER_TYPE = 2;
    public const TRADER_TYPE = 3;
    public const ADMIN_TYPE = 4;

    protected $fillable = [
        'fullName',
        'subName',
        'dob',
        'picture',
        'gender',
        'profession',
        'wilaya_id',
        'phone',
        'email',
        'password',
        'email_verified_at',
        'is_freelancer',
        'receive_ads',
        'token',
        'is_verified',
        'code_verification',
        'hide_phone',
        'is_kaiztech_team',
        'company',
        'website',
        'device_token',
        'onligne_at',
        'type',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'remember_token',
        'code_verification',
        'password'
    ];

    public function wallet()
    {
        $wallet = Wallet::where('user_id', $this->id)->first();
        if(!$wallet){
            $wallet = new Wallet();
            $wallet->balence = 0;
            $wallet->user_id = $this->id;
            $wallet->save();
        }
        return $this->hasOne(Wallet::class, 'user_id');
    }

    public function sendedTransactions()
    {
        return $this->hasMany(Transaction::class, 'sender_id');
    }

    public function receivedTransactions()
    {
        return $this->hasMany(Transaction::class, 'receiver_id');
    }


    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('d-m-Y, H:i');
    }



}
