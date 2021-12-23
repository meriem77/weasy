<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\SendPasswordMailToAdmin;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class AdminController extends Controller
{
    public function index()
    {
        return response()->json([
            'success' => true,
            'data' => Admin::where('id', '!=', Auth::id())->get(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'role' => 'required',
            'name' => 'required|min:3|max:191',
            'fonction' => 'required',
            'email' => 'required|email',
        ]);
        $password = Str::random(12);
        $details = [
            'name' => $request->name,
            'password' => $password,
        ];
        Mail::to($request->email)->send(new SendPasswordMailToAdmin($details));
        Admin::create([
            'role' => $request->role,
            'name' => $request->name,
            'fonction' => $request->fonction,
            'email' => $request->email,
            'password' => Hash::make($password),
        ]);
        return response()->json(['success' => true]);
    }

    public function destroy($id)
    {
        Admin::find($id)->delete();
        return response()->json(['success' => true]);
    }

}
