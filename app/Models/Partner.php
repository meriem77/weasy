<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'wilaya',
        'address',
        'phone',
    ];

    // public function points()
    // {
    //     return $this->hasMany(Point::class);
    // }

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('d-m-Y, H:i');
    }
}
