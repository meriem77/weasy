<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\FafRequest;
use App\Models\Faf;

class FafController extends Controller
{
    public function index(): \Illuminate\Http\JsonResponse
    {
        $faf = Faf::first();
        return response()->json($faf);
    }

    public function update(FafRequest $request, $id): bool
    {
        $faf = Faf::find($id);
        $faf->first_name = $request->first_name;
        $faf->last_name = $request->last_name;
        $faf->email = $request->email;
        $faf->password = $request->password;
        $faf->save();
        return true;
    }
}
