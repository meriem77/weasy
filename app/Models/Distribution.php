<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ditribution extends Model
{
    use HasFactory;

    protected $table = 'points_distribution';
    protected $primaryKey = 'id';
    protected $fillable = ['points', 'partner_id', 'created_at'];

    public $timestamps = false;

    public static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->created_at = $model->freshTimestamp();
        });
    }
}
