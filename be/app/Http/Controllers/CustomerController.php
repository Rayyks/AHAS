<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class CustomerController extends Controller
{
    public function index()
    {
        return User::where('role', 'customer')->get();
    }

    public function show()
    {
        $customer = Auth::user();

        if ($customer && $customer->role === 'customer') {
            return response()->json($customer, 200);
        } else {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'fullname' => 'required|string|max:255',
            'address' => 'nullable|string|max:255|regex:/^[a-zA-Z0-9\s\-\,\.]*$/',
            'phone_number' => 'nullable|string|max:15|regex:/^([0-9\s\-\+\(\)]*)$/|unique:users',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        $validated['password'] = bcrypt($validated['password']);
        $validated['role'] = 'customer';
        return User::create($validated);
    }

    // CustomerController.php
    public function update(Request $request)
    {
        $customer = Auth::user();

        if (!$customer || $customer->role !== 'customer') {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $validated = $request->validate([
            'address' => 'sometimes|nullable|string|max:255|regex:/^[a-zA-Z0-9\s\-\,\.]*$/',
            'phone_number' => 'sometimes|nullable|string|max:15|regex:/^([0-9\s\-\+\(\)]*)$/|unique:users,phone_number,' . $customer->id,
            'profile_picture' => 'sometimes|image|mimes:jpg,png|max:2048', // Updated validation rule
        ]);

        if ($request->hasFile('profile_picture')) {
            // Ensure the uploaded file is an image
            if (!$request->file('profile_picture')->isValid()) {
                return response()->json(['message' => 'Invalid image file'], 422);
            }

            if ($customer->profile_picture) {
                // Delete old profile picture
                Storage::delete($customer->profile_picture);
            }

            // Store the new profile picture
            $profilePicturePath = $request->file('profile_picture')->store('profile_pictures');

            // Update the profile_picture column in the database with the file path
            $customer->profile_picture = $profilePicturePath;
        }

        $customer->update($validated);
        return response()->json($customer, 200);
    }

    public function destroy()
    {
        $customer = Auth::user();

        if (!$customer || $customer->role !== 'customer') {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $customer->delete();
        return response(null, 204);
    }
}
