import { Link, router } from '@inertiajs/react';
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
    properties: {
        data: Property[];
        current_page: number;
        last_page: number;
        total: number;
        links: {
            url: string | null;
            label: string;
            active: boolean;
        }[];
    };

    filters: {
        search: string | null;
        status: string | null
    };
};

export default function Index({ properties, filters }: Props) {
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

                <div className="mb-6 flex flex-col gap-3 sm:flex-row">
                    <input
                        type="text"
                        defaultValue={filters.search ?? ''}
                        placeholder="Search by title, location or property type..."
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                router.get(
                                    '/properties',
                                    {
                                        search: e.currentTarget.value,
                                        status: filters.status ?? undefined,
                                    },
                                    {
                                        preserveState: true,
                                        replace: true,
                                    }
                                );
                            }
                        }}
                        className="flex-1 rounded-lg border bg-white px-4 py-3 outline-none focus:ring-2"
                    />

                    <select
                        value={filters.status ?? ''}
                        onChange={(e) => {
                            router.get(
                                '/properties',
                                {
                                    search: filters.search ?? undefined,
                                    status: e.target.value || undefined,
                                },
                                {
                                    preserveState: true,
                                    replace: true,
                                }
                            );
                        }}
                        className="rounded-lg border bg-white px-4 py-3"
                    >
                        <option value="">All Statuses</option>
                        <option value="For Sale">For Sale</option>
                        <option value="For Rent">For Rent</option>
                        <option value="Sold">Sold</option>
                        <option value="Rented">Rented</option>
                    </select>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {properties.data.map((property) => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                        />
                    ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                    {properties.links.map((link, index) => (
                        <button
                            key={index}
                            type="button"
                            disabled={!link.url}
                            onClick={() => {
                                if (link.url) {
                                    router.get(
                                        link.url,
                                        {},
                                        {
                                            preserveState: true,
                                            preserveScroll: true,
                                        }
                                    );
                                }
                            }}
                            dangerouslySetInnerHTML={{
                                __html: link.label,
                            }}
                            className={`rounded-lg border px-4 py-2 text-sm ${link.active
                                    ? 'bg-black text-white'
                                    : 'bg-white hover:bg-gray-50'
                                } disabled:cursor-not-allowed disabled:opacity-50`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
