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
        </div>
    );
}
