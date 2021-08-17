<?php

namespace App\Models;

use App\Http\Traits\UploadTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class League extends Model
{
    use HasFactory, UploadTrait;

    protected $fillable = [
        'name',
        'logo',
    ];


    public function setLogoAttribute($value)
    {
        if ($value) {
            $imageName = $this->image($value, 'leagues', $this->logo);
            $this->attributes['logo'] = $imageName;
        }
    }

}
