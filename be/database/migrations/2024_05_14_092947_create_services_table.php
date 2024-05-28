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
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('plate_number');
            $table->string('motorbike_type');
            $table->string('service_type');
            $table->text('additional_service')->nullable();
            $table->enum('status', ['Antrian', 'Sedang di Service', 'Pembayaran', 'Selesai'])->default('Antrian');
            $table->timestamp('scheduled_date')->nullable(); // Add the schedule_date column
            $table->decimal('price', 12, 2); // Add the price column (adjust precision and scale as needed)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
