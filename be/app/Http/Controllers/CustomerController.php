<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CustomerController extends Controller
{
    public function index()
    {
        return User::where('role', 'customer')->get();
    }

    public function show($id)
    {
        return User::where('role', 'customer')->findOrFail($id);
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

    public function update(Request $request, $id)
    {
        $customer = User::where('role', 'customer')->findOrFail($id);

        $validated = $request->validate([
            'fullname' => 'sometimes|required|string|max:255',
            'address' => 'nullable|string|max:255|regex:/^[a-zA-Z0-9\s\-\,\.]*$/',
            'phone_number' => 'nullable|string|max:15|regex:/^([0-9\s\-\+\(\)]*)$/|unique:users,phone_number,' . $customer->id,
            'email' => 'sometimes|required|string|email|max:255|unique:users,email,' . $customer->id,
            'password' => 'sometimes|required|string|min:8',
            'profile_picture' => 'sometimes|image|max:2048', // Add validation for profile picture
        ]);

        if (isset($validated['password'])) {
            $validated['password'] = bcrypt($validated['password']);
        }

        // Handle profile picture update
        if ($request->hasFile('profile_picture')) {
            // Delete previous profile picture if exists
            if ($customer->profile_picture) {
                Storage::delete($customer->profile_picture);
            }
            $profilePicturePath = $request->file('profile_picture')->store('profile_pictures');
            $validated['profile_picture'] = $profilePicturePath;
        }

        $customer->update($validated);
        return $customer;
    }

    public function destroy($id)
    {
        $customer = User::where('role', 'customer')->findOrFail($id);
        $customer->delete();
        return response(null, 204);
    }
}
