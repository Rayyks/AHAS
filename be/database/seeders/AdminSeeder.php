<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'fullname' => 'Admin User',
            'address' => '',
            'phone_number' => '081212122221',
            'email' => 'adminAHAS@gmail.com',
            'password' => Hash::make('AdminAhas2024'), // Change 'password' to your desired password
            'role' => 'admin',
        ]);
    }
}
