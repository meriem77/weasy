<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    public const WAP = 1;
    public const DZ = 2;

    public $fillable = [
        'amount',
        'cache',
        'type',
        'sender_id',
        'receiver_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('d-m-Y, H:i');
    }

    public function sender()
    {
        return $this->belongsTo(User::class, 'sender_id');
    }
    public function receiver()
    {
        return $this->belongsTo(User::class, 'receiver_id');
    }
//    public function orderLine()
//    {
//        return $this->belongsTo(Order::class, 'orderline_id');
//    }


}
