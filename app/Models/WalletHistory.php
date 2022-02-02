<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WalletHistory extends Model
{
    use HasFactory;
    use HasFactory;

    public $fillable = [
        'current_value',
        'old_value',
        'wallet_id'
    ];

    public function wallet()
    {
        return $this->belongsTo(Wallet::class, 'wallet_id');
    }

}
