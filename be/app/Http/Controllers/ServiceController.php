<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use Illuminate\Support\Facades\Auth;

class ServiceController extends Controller
{
    // Get all services
    public function index()
    {
        $services = Service::all();
        return response()->json($services);
    }

    // Get a specific service by ID
    public function show($id)
    {
        $service = Service::findOrFail($id);
        return response()->json($service);
    }

    // Create a new service request
    public function store(Request $request)
    {
        $request->validate([
            'fullname' => 'required|string|max:255',
            'plate_number' => 'required|string|max:255',
            'motorbike_type' => 'required|string|max:255',
            'service_type' => 'required|array',
            'additional_service' => 'nullable|string|max:255',
            'scheduled_date' => 'required|date|after_or_equal:tomorrow'
        ]);

        $service = new Service([
            'fullname' => $request->fullname,
            'plate_number' => $request->plate_number,
            'motorbike_type' => $request->motorbike_type,
            'service_type' => json_encode($request->service_type),
            'additional_service' => $request->additional_service,
            'scheduled_date' => $request->scheduled_date,
            'status' => 'Waitlist', // default status
            'user_id' => Auth::id(), // assuming the user is authenticated
        ]);

        $service->save();

        return response()->json(['message' => 'Service request created successfully', 'service' => $service]);
    }

    // Update a service request
    public function update(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|string|in:Waitlist,On Progress,Payment,Done',
            'price' => 'nullable|numeric'
        ]);

        $service = Service::findOrFail($id);
        $service->status = $request->status;

        if ($request->has('price')) {
            $service->price = $request->price;
        }

        $service->save();

        return response()->json(['message' => 'Service request updated successfully', 'service' => $service]);
    }

    // Delete a service request
    public function destroy($id)
    {
        $service = Service::findOrFail($id);
        $service->delete();

        return response()->json(['message' => 'Service request deleted successfully']);
    }
}
