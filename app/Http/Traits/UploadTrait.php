<?php

namespace App\Http\Traits;


trait UploadTrait
{

    public function image($data, $folderName, $fileName)
    {
        //Check if method update and path exist
        if ($fileName) {
            $parts = explode("/", $fileName);
            $existPath = 'uploads/' . $folderName . '/' . end($parts);
            if (\File::exists($existPath)) \File::delete($existPath);
        }
        //Store in public folder
        $path = env('APP_URL') . '/uploads/' . $folderName . '/';
        $imageName = $path . time() . '.' . $data->getClientOriginalExtension();
        $data->move(public_path('uploads/' . $folderName), $imageName);
        return $imageName;
    }
}
