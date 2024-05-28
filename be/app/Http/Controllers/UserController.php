<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function show($id)
    {
        return User::findOrFail($id);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'fullname' => 'required|string|max:255',
            'address' => 'nullable|string|max:255|regex:/^[a-zA-Z0-9\s\-\,\.]*$/',
            'phone_number' => 'nullable|string|max:15|regex:/^([0-9\s\-\+\(\)]*)$/|unique:users',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'role' => 'in:customer,admin'
        ]);

        $validated['password'] = bcrypt($validated['password']);
        return User::create($validated);
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $validated = $request->validate([
            'fullname' => 'sometimes|required|string|max:255',
            'address' => 'nullable|string|max:255|regex:/^[a-zA-Z0-9\s\-\,\.]*$/',
            'phone_number' => 'nullable|string|max:15|regex:/^([0-9\s\-\+\(\)]*)$/|unique:users,phone_number,' . $user->id,
            'email' => 'sometimes|required|string|email|max:255|unique:users,email,' . $user->id,
            'password' => 'sometimes|required|string|min:8',
            'role' => 'in:customer,admin'
        ]);

        if (isset($validated['password'])) {
            $validated['password'] = bcrypt($validated['password']);
        }

        $user->update($validated);
        return $user;
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return response(null, 204);
    }
}
