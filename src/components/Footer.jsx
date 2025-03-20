import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p>&copy; 2025 AquaFilter. Barcha huquqlar himoyalangan.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-blue-400">
                        Facebook
                    </a>
                    <a href="#" className="hover:text-blue-400">
                        Instagram
                    </a>
                    <a href="#" className="hover:text-blue-400">
                        Telegram
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
