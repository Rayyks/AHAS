<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\BlogSeeder;
use Database\Seeders\AdminSeeder;
use Database\Seeders\BloggerSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {
        // Call the AdminSeeder class
        $this->call(AdminSeeder::class);

        // call the BloggerSeeder class
        $this->call(BloggerSeeder::class);

        // Call the BlogSeeder class
        $this->call(BlogSeeder::class);
    }
}
