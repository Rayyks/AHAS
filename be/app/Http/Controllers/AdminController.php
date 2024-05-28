<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminController extends Controller
{
    public function index()
    {
        return User::where('role', 'admin')->get();
    }

    public function show($id)
    {
        return User::where('role', 'admin')->findOrFail($id);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'fullname' => 'required|string|max:255',
            'address' => 'nullable|string|max:255|regex:/^[a-zA-Z0-9\s\-\,\.]*$/',
            'phone_number' => 'nullable|string|max:15|regex:/^([0-9\s\-\+\(\)]*)$/|unique:users',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'role' => 'required|string|in:admin,blogger', // Ensure the role is either admin or blogger
        ]);

        $validated['password'] = bcrypt($validated['password']);

        // Ensure the admin cannot create another admin
        if ($validated['role'] === 'admin') {
            abort(403, 'Forbidden. Admin cannot create another admin.');
        }

        return User::create($validated);
    }

    public function update(Request $request, $id)
    {
        $admin = User::where('role', 'admin')->findOrFail($id);

        $validated = $request->validate([
            'fullname' => 'sometimes|required|string|max:255',
            'address' => 'nullable|string|max:255|regex:/^[a-zA-Z0-9\s\-\,\.]*$/',
            'phone_number' => 'nullable|string|max:15|regex:/^([0-9\s\-\+\(\)]*)$/|unique:users,phone_number,' . $admin->id,
            'email' => 'sometimes|required|string|email|max:255|unique:users,email,' . $admin->id,
            'password' => 'sometimes|required|string|min:8',
            'profile_picture' => 'sometimes|image|max:2048', // Add validation for profile picture
        ]);

        if (isset($validated['password'])) {
            $validated['password'] = bcrypt($validated['password']);
        }

        // Handle profile picture update
        if ($request->hasFile('profile_picture')) {
            // Delete previous profile picture if exists
            if ($admin->profile_picture) {
                Storage::delete($admin->profile_picture);
            }
            $profilePicturePath = $request->file('profile_picture')->store('profile_pictures');
            $validated['profile_picture'] = $profilePicturePath;
        }

        $admin->update($validated);
        return $admin;
    }

    public function destroy($id)
    {
        $admin = User::where('role', 'admin')->findOrFail($id);
        $admin->delete();
        return response(null, 204);
    }
}
