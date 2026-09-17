import { Link } from '@inertiajs/react';

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

export default function Show({ property }: Props) {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="mx-auto max-w-7xl">

                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">
                            {property.title} Details
                        </h1>
                    </div>

                    <Link
                        href="/properties"
                        className="rounded-lg border-2 border-black px-5 py-2.5 text-sm font-medium  hover:bg-gray-100"
                    >
                        ← Back to Property
                    </Link>
                </div>

                <div className="rounded-xl border bg-white p-8 shadow-sm">

                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="text-3xl font-bold">
                                {property.title}
                            </h1>

                            <p className="mt-2 text-gray-500">
                                {property.location}
                            </p>
                        </div>

                        <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
                            {property.status}
                        </span>
                    </div>

                    <div className="mt-8">
                        <p className="text-3xl font-bold">
                            AED {Number(property.price).toLocaleString()}
                        </p>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-3">

                        <div className="rounded-lg bg-gray-50 p-4">
                            <p className="text-sm text-gray-500">
                                Property Type
                            </p>

                            <p className="mt-1 font-semibold">
                                {property.property_type}
                            </p>
                        </div>

                        <div className="rounded-lg bg-gray-50 p-4">
                            <p className="text-sm text-gray-500">
                                Bedrooms
                            </p>

                            <p className="mt-1 font-semibold">
                                {property.bedrooms}
                            </p>
                        </div>

                        <div className="rounded-lg bg-gray-50 p-4">
                            <p className="text-sm text-gray-500">
                                Bathrooms
                            </p>

                            <p className="mt-1 font-semibold">
                                {property.bathrooms}
                            </p>
                        </div>

                    </div>

                    <div className="mt-8 border-t pt-8">
                        <h2 className="text-lg font-semibold">
                            Description
                        </h2>

                        <p className="mt-3 leading-7 text-gray-600">
                            {property.description ||
                                'No description available.'}
                        </p>
                    </div>

                    <div className="mt-8 flex gap-3 border-t pt-6">

                        <Link
                            href={`/properties/${property.id}/edit`}
                            className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
                        >
                            Edit Property
                        </Link>

                        <Link
                            href="/properties"
                            className="rounded-lg border px-5 py-2.5 text-sm font-medium hover:bg-gray-50"
                        >
                            Back
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
}
