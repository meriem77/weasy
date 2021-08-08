<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\VersionRequest;
use App\Models\Version;


class VersionController extends Controller
{

    public function index()
    {
        $version = Version::first();
        return response()->json($version);
    }

    public function update(VersionRequest $request)
    {
        $version = Version::find($request->id);
        $version->version = $request->version;
        $version->save();
        return true;
    }
}
