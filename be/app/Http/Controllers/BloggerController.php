<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use App\Models\User; // Include the User model
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class BloggerController extends Controller
{
    public function index()
    {
        $blogs = Blog::with('user:id,fullname,profile_picture')->latest()->get(); // Eager load user data
        return response()->json($blogs, 200);
    }

    public function create()
    {
        // No need to return a view for creating a blog in a RESTful API
        return response()->json([], 204);
    }

    public function store(Request $request)
    {
        // Validate the request data
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'nullable|image|max:2048',
        ]);

        // Get the authenticated user's ID
        $userId = Auth::id();

        // Generate a slug from the title
        $slug = Str::slug($request->title);

        // Prepare the blog data
        $blogData = [
            'title' => $request->title,
            'content' => $request->content,
            'slug' => $slug, // Add the generated slug
            'user_id' => $userId, // Assign the authenticated user's ID
        ];

        // Handle image upload
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('blog_images');
            $blogData['image'] = $imagePath;
        }

        // Create the blog post
        $blog = Blog::create($blogData);

        // Return a success response
        return response()->json(['message' => 'Blog post created successfully.', 'blog' => $blog], 201);
    }

    public function show(Blog $blog)
    {
        // Retrieve the blogger's ID, name, and profile picture
        $blogger = $blog->user()->select('id', 'fullname', 'profile_picture')->first();

        return response()->json(['blog' => $blog, 'blogger' => $blogger], 200);
    }

    public function edit(Blog $blog)
    {
        if ($blog->user_id != Auth::id()) {
            abort(403, 'Unauthorized action.'); // Check if the current user is the author of the blog
        }

        // No need to return a view for editing a blog in a RESTful API
        return response()->json(['blog' => $blog], 200);
    }

    public function update(Request $request, Blog $blog)
    {
        if ($blog->user_id != Auth::id()) {
            abort(403, 'Unauthorized action.'); // Check if the current user is the author of the blog
        }

        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'nullable|image|max:2048', // Maximum file size of 2MB for image uploads
            // Add validation rules for other fields as needed
        ]);

        $blogData = $request->except('image');

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('blog_images'); // Store the uploaded image
            $blogData['image'] = $imagePath;
        }

        $blog->update($blogData);

        return response()->json(['message' => 'Blog post updated successfully.', 'blog' => $blog], 200);
    }

    public function destroy(Blog $blog)
    {
        if ($blog->user_id != Auth::id()) {
            abort(403, 'Unauthorized action.'); // Check if the current user is the author of the blog
        }

        $blog->delete();

        return response()->json(['message' => 'Blog post deleted successfully.'], 204);
    }

    public function updateProfile(Request $request)
    {
        $user = Auth::user();

        // Validate the request data
        $validated = $request->validate([
            'fullname' => 'sometimes|required|string|max:255',
            'address' => 'nullable|string|max:255|regex:/^[a-zA-Z0-9\s\-\,\.]*$/',
            'phone_number' => 'nullable|string|max:15|regex:/^([0-9\s\-\+\(\)]*)$/|unique:users,phone_number,' . $user->id,
            'email' => 'sometimes|required|string|email|max:255|unique:users,email,' . $user->id,
            'password' => 'sometimes|required|string|min:8',
            'profile_picture' => 'sometimes|image|max:2048', // Add validation for profile picture
        ]);

        if (isset($validated['password'])) {
            $validated['password'] = bcrypt($validated['password']);
        }

        // Handle profile picture update
        if ($request->hasFile('profile_picture')) {
            // Delete previous profile picture if exists
            if ($user->profile_picture) {
                Storage::delete($user->profile_picture);
            }
            $profilePicturePath = $request->file('profile_picture')->store('profile_pictures');
            $validated['profile_picture'] = $profilePicturePath;
        }

        $user->update($validated);
        return $user;
    }
}
