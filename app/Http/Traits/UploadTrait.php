<?php

namespace App\Http\Traits;


trait UploadTrait
{

    public function image($data): string
    {
        $path = env('APP_URL') . '/uploads/logo/';
        $imageName = $path . time() . '.' . $data->getClientOriginalName();
        $data->move(public_path('uploads/logo'), $imageName);
        return $imageName;
    }
}
