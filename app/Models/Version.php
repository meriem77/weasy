<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Version extends Model
{
    use HasFactory;

    protected $casts = [
        'updated_at' => "datetime:Y/m/d , H:i",
    ];
    protected $fillable = [
        'version',
    ];
}
