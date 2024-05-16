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
            $table->enum('service_type', ['oil_change', 'light_service', 'heavy_service']);
            $table->text('additional_service')->nullable();
            $table->enum('status', ['waitlist', 'on_progress', 'payment', 'done'])->default('waitlist');
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
