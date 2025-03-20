import React from "react";

const FilterBar = () => {
    return (
        <div id="filters" className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4 text-blue-600">
                    Filter bo'yicha qidiring
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        type="text"
                        placeholder="Model nomi..."
                        className="p-3 border rounded"
                    />
                    <select className="p-3 border rounded">
                        <option>Foydalanish joyi</option>
                        <option>Uy</option>
                        <option>Ofis</option>
                        <option>Sanoat</option>
                    </select>
                    <button className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">
                        Qidirish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
