<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    public const B2C = 0;
    public const B2B = 1;

    public $table = "stores";

    public $fillable = [
        'name',
        'cover',
        'user_id',
        'rc', // registre de commecre
        'nif', // identifiant fiscale
        'validated',
        'password',
        'token',
        'gps',
        'email',
        'number_pro',
        'category_id',
        'agrement',
        'type'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

//    public function products()
//    {
//        return $this->hasMany(Product::class);
//    }

}
