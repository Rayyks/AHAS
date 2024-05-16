<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class BloggerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        User::create([
            'fullname' => 'Le Blogger',
            'address' => '',
            'phone_number' => '082288334888',
            'email' => 'leblog@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'blogger',
        ]);
    }
}
