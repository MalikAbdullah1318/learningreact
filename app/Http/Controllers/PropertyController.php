<?php

namespace App\Http\Controllers;

use App\Models\Property;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PropertyController extends Controller
{
    public function index()
    {
        return Inertia::render('properties/index', [
            'properties' => Property::latest()->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('properties/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'price' => ['required', 'numeric'],
            'location' => ['required', 'string', 'max:255'],
            'property_type' => ['required', 'string', 'max:100'],
            'bedrooms' => ['required', 'integer', 'min:0'],
            'bathrooms' => ['required', 'integer', 'min:0'],
            'status' => ['required', 'string', 'max:50'],
            'description' => ['nullable', 'string'],
        ]);

        Property::create($validated);

        return redirect()
            ->route('properties.index')
            ->with('success', 'Property created successfully.');
    }
}
