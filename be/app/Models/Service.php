<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;


    protected $fillable = [
        'fullname',
        'plate_number',
        'motorbike_type',
        'service_type',
        'additional_service',
        'scheduled_date',
        'status',
        'price',
        'user_id',
    ];

    protected $casts = [
        'service_type' => 'array',
        'scheduled_date' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
