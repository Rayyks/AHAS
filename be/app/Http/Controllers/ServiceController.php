<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class ServiceController extends Controller
{
    // Get all services
    public function index()
    {
        // Fetch services only for the authenticated user
        $services = Service::where('user_id', Auth::id())->get();

        // Fetch customer data for each service
        $servicesWithCustomers = $services->map(function ($service) {
            $customer = User::find($service->user_id);
            return [
                'service' => $service,
                'customer' => $customer
            ];
        });

        return response()->json($servicesWithCustomers);
    }

    // Get a specific service by ID
    public function show($id)
    {
        $service = Service::findOrFail($id);

        // Fetch customer data associated with the service
        $customer = User::find($service->user_id);

        return response()->json([
            'service' => $service,
            'customer' => $customer
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'plate_number' => 'required|string|max:255',
            'motorbike_type' => 'required|string|max:255',
            'service_type' => 'required|array', // This line specifies that 'service_type' must be an array
            'additional_service' => 'nullable|string|max:255',
            'scheduled_date' => 'required|date|after_or_equal:tomorrow'
        ]);

        // Convert scheduled_date to Carbon instance
        $scheduledDate = Carbon::parse($request->scheduled_date);

        // Define the price for each service type
        $servicePrices = [
            'ganti_oli' => 50000, // Price for ganti oli
            'service_ringan' => 60000, // Price for service ringan
            'service_lengkap' => 150000 // Price for service lengkap
        ];

        // Calculate the total price based on the selected service types
        $totalPrice = 0;
        foreach ($request->service_type as $type) {
            // Check if the service type exists in the servicePrices array
            if (array_key_exists($type, $servicePrices)) {
                // Add the price of the service type to the total price
                $totalPrice += $servicePrices[$type];
            }
        }

        // Create a new Service instance
        $service = new Service([
            'plate_number' => $request->plate_number,
            'motorbike_type' => $request->motorbike_type,
            'service_type' => json_encode($request->service_type),
            'additional_service' => $request->additional_service,
            'scheduled_date' => $scheduledDate, // Assign scheduled_date
            'status' => 'Antrian', // default status
            'user_id' => Auth::id(), // assuming the user is authenticated
            'price' => $totalPrice // Assign the calculated total price
        ]);

        $service->save();

        // Fetch the user/customer data associated with the service
        $customer = User::find(Auth::id()); // Assuming the user model is named User

        return response()->json([
            'message' => 'Service request created successfully',
            'service' => $service,
            'customer' => $customer
        ]);
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
