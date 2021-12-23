<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\SendPasswordMailToPartner;
use App\Models\Partner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class PartnerController extends Controller
{
    public function index()
    {
        return response()->json([
            'success' => true,
            'data' => Partner::all(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email',
            'wilaya' => 'required',
            'address' => 'required',
            'phone' => 'required',
        ]);
        $password = Str::random(12);
        $details = [
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'password' => $password,
        ];
        Mail::to($request->email)->send(new SendPasswordMailToPartner($details));
        Partner::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'wilaya' => $request->wilaya,
            'address' => $request->address,
            'phone' => $request->phone,
            'password' => Hash::make($password),
        ]);
        return response()->json(['success' => true]);
    }

    public function destroy($id)
    {
        Partner::find($id)->delete();
        return response()->json(['success' => true]);
    }
}
