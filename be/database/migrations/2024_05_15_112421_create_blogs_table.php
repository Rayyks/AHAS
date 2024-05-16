<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('title');
            $table->text('content');
            $table->string('image')->nullable(); // For storing the URL of the main blog image
            $table->string('slug')->unique(); // For generating SEO-friendly URLs
            $table->string('excerpt')->nullable(); // A short excerpt or summary of the blog content
            $table->text('meta_description')->nullable(); // Meta description for SEO purposes
            $table->enum('status', ['draft', 'published', 'archived'])->default('draft'); // Status of the blog post
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blogs');
    }
};
