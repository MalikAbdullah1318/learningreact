import { Link } from '@inertiajs/react';
import PropertyCard from '@/components/properties/PropertyCard';

type Property = {
    id: number;
    title: string;
    price: number;
    location: string;
    property_type: string;
    bedrooms: number;
    bathrooms: number;
    status: string;
    description: string | null;
};

type Props = {
    properties: Property[];
};

export default function Index({ properties }: Props) {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 flex items-center justify-between">
    <div>
        <h1 className="text-3xl font-bold">
            Properties
        </h1>

        <p className="mt-1 text-gray-500">
            Manage your properties
        </p>
    </div>

    <Link
        href="/properties/create"
        className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
    >
        + Add Property
    </Link>
</div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {properties.map((property) => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
