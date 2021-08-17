<?php

namespace App\Models;

use App\Http\Traits\UploadTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Club extends Model
{
    use HasFactory, UploadTrait;

    protected $fillable = [
        'league_id',
        'name',
        'slogan',
        'logo',
    ];

    public function league()
    {
        return $this->belongsTo(League::class)->withDefault();
    }

    public function setLogoAttribute($value)
    {
        if ($value) {
            $imageName = $this->image($value, 'clubs', $this->logo);
            $this->attributes['logo'] = $imageName;
        }
    }
}
