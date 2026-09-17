import { Link, router } from '@inertiajs/react';

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
    property: Property;
};



export default function PropertyCard({ property }: Props) {

    function deleteProperty() {
        if (!confirm('Are you sure you want to delete this property?')) {
            return;
        }

        router.delete(`/properties/${property.id}`);
    }
    return (
        <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-start justify-between">
                <div>
                    <h2 className="text-lg font-semibold">
                        {property.title}
                    </h2>

                    <p className="text-sm text-gray-500">
                        {property.location}
                    </p>
                </div>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                    {property.status}
                </span>
            </div>

            <p className="mb-4 text-xl font-bold">
                AED {Number(property.price).toLocaleString()}
            </p>

            <div className="flex gap-4 text-sm text-gray-600">
                <span>{property.bedrooms} Bedrooms</span>

                <span>{property.bathrooms} Bathrooms</span>

                <span>{property.property_type}</span>
            </div>

            <div className="mt-5 flex gap-2 border-t pt-4">
                <Link
                    href={`/properties/${property.id}`}
                    className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
                >
                    View
                </Link>

                <Link
                    href={`/properties/${property.id}/edit`}
                    className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
                >
                    Edit
                </Link>

                <button
                    type="button"
                    onClick={deleteProperty}
                    className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

