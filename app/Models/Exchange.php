<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exchange extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';
    protected $fillable = ['seller_id', 'points', 'value', 'created_at', 'confirmed_at', 'confirmed_by'];


}
