import React from "react";

const Categories = () => {
    const categories = [
        { id: 1, title: "Uy uchun Filtrlar", image: "/images/home-filter.jpg" },
        {
            id: 2,
            title: "Ofis uchun Filtrlar",
            image: "/images/office-filter.jpg",
        },
        {
            id: 3,
            title: "Sanoat Filtrlar",
            image: "/images/industry-filter.jpg",
        },
    ];

    return (
        <div id="categories" className="py-16 bg-white container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
                Kategoriyalar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                    >
                        <img
                            src={cat.image}
                            alt={cat.title}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">
                                {cat.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
