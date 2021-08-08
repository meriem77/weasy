<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\FafRequest;
use App\Http\Traits\UploadTrait;
use App\Models\Faf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class FafController extends Controller
{
    use UploadTrait;

    public function index()
    {
        $faf = Faf::first();
        return response()->json($faf);
    }

    public function update(FafRequest $request)
    {
        $faf = Faf::find($request->id);
        $faf->first_name = $request->first_name;
        $faf->last_name = $request->last_name;
        $faf->email = $request->email;
        $faf->password = $request->password ? Hash::make($request->password) : $faf->password;
        $faf->save();
        return true;
    }

    public function updateAvatar(Request $request)
    {
        $faf = Faf::find($request->id);
        if ($request->hasFile('avatar')) {
            $imageName = $this->image($request->avatar, 'faf', $faf->avatar);
        }
        $faf->avatar = $imageName;
        $faf->save();
        return true;
    }
}
