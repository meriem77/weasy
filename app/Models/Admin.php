<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Admin extends  Model
{
    use HasFactory;

    protected $fillable = [
        'role',
        'fonction',
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
    ];

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('d-m-Y , H:i');
    }
}
