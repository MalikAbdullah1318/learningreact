<?php

namespace Database\Factories;

use App\Models\Property;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Property>
 */
class PropertyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(3),
            'price' => fake()->numberBetween(100000, 10000000),
            'location' => fake()->city(),
            'property_type' => fake()->randomElement([
                'House',
                'Apartment',
                'Villa',
                'Commercial',
                'Plot',
            ]),
            'bedrooms' => fake()->numberBetween(1, 6),
            'bathrooms' => fake()->numberBetween(1, 5),
            'status' => fake()->randomElement([
                'For Sale',
                'For Rent',
                'Sold',
                'Rented',
            ]),
            'description' => fake()->paragraph(),
        ];
    }
}
