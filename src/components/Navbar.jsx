import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-2xl font-bold text-blue-600">
                    AquaFilter
                </div>
                <ul className="flex space-x-6 text-gray-700 font-medium">
                    <li>
                        <a href="#home" className="hover:text-blue-600">
                            Bosh sahifa
                        </a>
                    </li>
                    <li>
                        <a href="#categories" className="hover:text-blue-600">
                            Kategoriyalar
                        </a>
                    </li>
                    <li>
                        <a href="#filters" className="hover:text-blue-600">
                            Filterlar
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-blue-600">
                            Loyihalar
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-blue-600">
                            Kontakt
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
