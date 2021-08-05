<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request): \Illuminate\Http\JsonResponse
    {
        $user = Admin::where('email', $request->email)->first();
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'auth' => false,
                'message' => 'Votre email ou  mot de passe est incorrect !'
            ], 401);
        }
        $token = $user->createToken('token')->plainTextToken;
        $user['token'] = $token;
        return response()->json([
            'success' => true,
            'user' => $user,
        ]);
    }

    public function logout(Request $request): bool
    {
        $request->user()->currentAccessToken()->delete();
        return true;
    }
}
