<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\VersionRequest;
use App\Models\Version;
use Illuminate\Http\Request;


class VersionController extends Controller
{

    public function index(): \Illuminate\Http\JsonResponse
    {
        $version = Version::first();
        return response()->json($version);
    }

    public function update(VersionRequest $request, $id): bool
    {
        $version = Version::find($id);
        $version->version = $request->version;
        $version->save();
        return true;
    }
}
