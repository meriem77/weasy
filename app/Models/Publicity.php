<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Publicity extends Model
{
    use HasFactory;
    public const type_people = 0;
    public const type_market = 1;

    public $fillable = [
        'images',
        'link',
        'type',
        'expiration_date',
    ];
}
