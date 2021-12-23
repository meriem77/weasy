<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Point extends Model
{
    use HasFactory;

    protected $fillable = [
        'partner_id',
        'value',
    ];

    public function partner()
    {
        return $this->belongsTo(Partner::class);
    }
}
