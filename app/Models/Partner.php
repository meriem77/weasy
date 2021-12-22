<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Partner extends Model
{
    use SoftDeletes;

    protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = ['fullname', 'email', 'password', 'points', 'created_at', 'updated_at', 'deleted_at'];

    

}
