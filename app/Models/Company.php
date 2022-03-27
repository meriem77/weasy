<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;


    public $table = "companies";

    public $fillable = [
        'name',
        'address',
        'email',
        'phone',
        'website',
        'picture',
        'rc',//registre de commerce
        'nif',// identifiant fiscale
        'password',
        'validated',
        'token',

    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];


}
