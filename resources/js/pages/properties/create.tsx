import { Link, useForm } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        price: '',
        location: '',
        property_type: '',
        bedrooms: '',
        bathrooms: '',
        status: '',
        description: '',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();

        post('/properties');
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="mx-auto max-w-3xl">
                <div className="mb-8">
                    <Link
                        href="/properties"
                        className="text-sm text-gray-500 hover:text-gray-900"
                    >
                        ← Back to Properties
                    </Link>

                    <h1 className="mt-4 text-3xl font-bold">
                        Create Property
                    </h1>

                    <p className="mt-1 text-gray-500">
                        Add a new property.
                    </p>
                </div>

                <form
                    onSubmit={submit}
                    className="space-y-6 rounded-xl border bg-white p-6 shadow-sm"
                >
                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Title
                        </label>

                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) =>
                                setData('title', e.target.value)
                            }
                            className="w-full rounded-lg border px-3 py-2"
                            placeholder="Luxury Apartment"
                        />

                        {errors.title && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.title}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Price
                        </label>

                        <input
                            type="number"
                            value={data.price}
                            onChange={(e) =>
                                setData('price', e.target.value)
                            }
                            className="w-full rounded-lg border px-3 py-2"
                            placeholder="1500000"
                        />

                        {errors.price && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.price}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Location
                        </label>

                        <input
                            type="text"
                            value={data.location}
                            onChange={(e) =>
                                setData('location', e.target.value)
                            }
                            className="w-full rounded-lg border px-3 py-2"
                            placeholder="Dubai Marina"
                        />

                        {errors.location && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.location}
                            </p>
                        )}
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Property Type
                            </label>

                            <select
                                value={data.property_type}
                                onChange={(e) =>
                                    setData(
                                        'property_type',
                                        e.target.value
                                    )
                                }
                                className="w-full rounded-lg border px-3 py-2"
                            >
                                <option value="">
                                    Select type
                                </option>
                                <option value="Apartment">
                                    Apartment
                                </option>
                                <option value="Villa">
                                    Villa
                                </option>
                                <option value="Townhouse">
                                    Townhouse
                                </option>
                                <option value="Office">
                                    Office
                                </option>
                            </select>

                            {errors.property_type && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.property_type}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Status
                            </label>

                            <select
                                value={data.status}
                                onChange={(e) =>
                                    setData(
                                        'status',
                                        e.target.value
                                    )
                                }
                                className="w-full rounded-lg border px-3 py-2"
                            >
                                <option value="">
                                    Select status
                                </option>
                                <option value="For Sale">
                                    For Sale
                                </option>
                                <option value="For Rent">
                                    For Rent
                                </option>
                                <option value="Sold">
                                    Sold
                                </option>
                                <option value="Rented">
                                    Rented
                                </option>
                            </select>

                            {errors.status && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.status}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Bedrooms
                            </label>

                            <input
                                type="number"
                                min="0"
                                value={data.bedrooms}
                                onChange={(e) =>
                                    setData(
                                        'bedrooms',
                                        e.target.value
                                    )
                                }
                                className="w-full rounded-lg border px-3 py-2"
                            />

                            {errors.bedrooms && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.bedrooms}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Bathrooms
                            </label>

                            <input
                                type="number"
                                min="0"
                                value={data.bathrooms}
                                onChange={(e) =>
                                    setData(
                                        'bathrooms',
                                        e.target.value
                                    )
                                }
                                className="w-full rounded-lg border px-3 py-2"
                            />

                            {errors.bathrooms && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.bathrooms}
                                </p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Description
                        </label>

                        <textarea
                            value={data.description}
                            onChange={(e) =>
                                setData(
                                    'description',
                                    e.target.value
                                )
                            }
                            rows={5}
                            className="w-full rounded-lg border px-3 py-2"
                            placeholder="Property description..."
                        />

                        {errors.description && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.description}
                            </p>
                        )}
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={processing}
                            className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50"
                        >
                            {processing
                                ? 'Creating...'
                                : 'Create Property'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
