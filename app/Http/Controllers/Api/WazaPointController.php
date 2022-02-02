<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\WazaPoint;

class WazaPointController extends Controller
{
    public function index()
    {
        return response()->json([
            'success' => true,
            'data' => WazaPoint::latest()->first(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'value' => 'required|min:3|max:191',
        ]);
        WazaPoint::create([
            'value' => $request->value,
        ]);
        return response()->json(['success' => true]);
    }

}
