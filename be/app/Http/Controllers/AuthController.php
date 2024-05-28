<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'User logged in successfully',
            'user' => $user,
            'token' => $token,
        ]);
    }

    public function register(Request $request)
    {
        $validated = $request->validate([
            'fullname' => 'required|string|max:255',
            'address' => 'nullable|string|max:255|regex:/^[a-zA-Z0-9\s\-\,\.]*$/',
            'phone_number' => 'nullable|string|max:15|regex:/^([0-9\s\-\+\(\)]*)$/|unique:users',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'role' => 'string|in:customer,admin', // Remove 'required' and set default to 'customer'
        ]);

        // Set the default role to 'customer' if not provided
        $role = $request->input('role', 'customer');

        $validated['password'] = Hash::make($validated['password']);
        $validated['role'] = $role;

        $user = User::create($validated);

        return response()->json([
            'message' => 'User registered successfully',
            'user' => $user,
        ], 201);
    }

    public function logout(Request $request)
    {
        // Ensure the request is authenticated
        if ($request->user()) {
            // Delete the current access token
            $request->user()->tokens()->where('id', $request->user()->currentAccessToken()->id)->delete();
            return response()->json(['message' => 'Logout successful'], 200);
        } else {
            // User is not authenticated, return unauthorized response
            return response()->json(['message' => 'Unauthorized'], 401);
        }
    }
}
