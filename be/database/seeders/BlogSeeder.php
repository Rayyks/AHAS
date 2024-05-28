<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Blog;
use Illuminate\Support\Str;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $blogs = [
            [
                'title' => 'Kenapa orang indonesia kebanyakan orang bodoh',
                'content' => 'Konten dari blog ini menjelaskan mengapa sebagian besar orang Indonesia dianggap bodoh dan faktor-faktor yang menyebabkannya.',
            ],
            [
                'title' => 'Bagaimana caranya agar bisa tahu orang itu bodoh',
                'content' => 'Artikel ini membahas cara-cara untuk mengidentifikasi tanda-tanda seseorang dianggap bodoh dan apa yang dapat dilakukan untuk menghindari perilaku bodoh.',
            ],
            [
                'title' => 'Metode yang sangat ampuh untuk tidak menjadi bodoh',
                'content' => 'Berbagai metode dan strategi yang efektif untuk meningkatkan kecerdasan dan menghindari perilaku bodoh dijelaskan dalam blog ini.',
            ],
            [
                'title' => 'Bodoh adalah panggal miskin',
                'content' => 'Pembahasan mengenai konsep kebodohan dan dampaknya terhadap kemiskinan serta cara untuk menghindarinya.',
            ],
            [
                'title' => 'Stop bodoh',
                'content' => 'Pesan untuk mengajak masyarakat untuk meningkatkan kesadaran dan menghindari perilaku bodoh.',
            ],
        ];

        // Loop through the blogs array and create blog posts
        foreach ($blogs as $blog) {
            // Generate a slug from the title
            $slug = Str::slug($blog['title']);

            // Add the slug to the blog data
            $blogData = [
                'title' => $blog['title'],
                'content' => $blog['content'],
                'slug' => $slug,
                'user_id' => 2, // Assuming the user with ID 1 is the author of these blogs
            ];

            // Create the blog post
            Blog::create($blogData);
        }
    }
}
