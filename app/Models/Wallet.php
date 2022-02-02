<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wallet extends Model
{
    use HasFactory;

    public const MAX_BALENCE = 1000000;
    public const MIN_BALENCE_PARTNER = 2000;
    public const BALENCE_PARTNER = 10000;

    public $table = "wallets";

    public $fillable = [
        'balence',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class,'user_id')->withDefault();
    }

    public function history()
    {
        return $this->hasMany(WalletHistory::class, 'wallet_id');
    }

    public function add($value){
        $history = new WalletHistory();
        $history->wallet_id = $this->id;
        $history->old_value = $this->balence;
        $this->balence +=$value;
        $history->current_value = $this->balence;
        $this->save();
        $history->save();
    }

    public function subtract($value){
        $history = new WalletHistory();
        $history->wallet_id = $this->id;
        $history->old_value = $this->balence;
        $this->balence -=$value;
        $history->current_value = $this->balence;
        $this->save();
        $history->save();
    }

}
