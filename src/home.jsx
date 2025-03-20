import React, { useState, useEffect } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Menu,
    X,
    Phone,
    Mail,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Globe,
    ChevronDown,
    Building,
    Award,
} from "lucide-react";
import Banner1 from "./assets/banner1.jpg";
import Banner2 from "./assets/banner2.webp";
import Banner3 from "./assets/banner3.jpg";
import Category1 from "./assets/category1.jpg";
import Category2 from "./assets/category2.webp";
import Category3 from "./assets/category3.jpg";
import Category4 from "./assets/category4.webp";
import Category5 from "./assets/category5.jpeg";
import Category6 from "./assets/category6.webp";

// Main App Component
const FilterMachinesWebsite = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState("en");

    // Available languages
    const languages = [
        { code: "en", name: "EN" },
        { code: "es", name: "RU" },
        { code: "fr", name: "UZ" },
    ];

    // Sample data
    const carouselSlides = [
        {
            id: 1,
            image: Banner1,
            title: "Industrial Filtration Solutions",
            description:
                "High-quality water and air filtration systems for industrial applications",
        },
        {
            id: 2,
            image: Banner2,
            title: "Custom Engineered Systems",
            description:
                "Tailor-made filtration solutions for your specific industry needs",
        },
        {
            id: 3,
            image: Banner3,
            title: "Global Support & Maintenance",
            description:
                "Worldwide installation and maintenance services for all filtration equipment",
        },
    ];

    const categories = [
        {
            id: 1,
            name: "Water Filtration",
            image: Category1,
            count: 24,
        },
        {
            id: 2,
            name: "Air Purification",
            image: Category2,
            count: 18,
        },
        {
            id: 3,
            name: "Oil Filtration",
            image: Category3,
            count: 12,
        },
        {
            id: 4,
            name: "Dust Collection",
            image: Category4,
            count: 15,
        },
        {
            id: 5,
            name: "Chemical Filtration",
            image: Category5,
            count: 9,
        },
        {
            id: 6,
            name: "Industrial Separators",
            image: Category6,
            count: 11,
        },
    ];

    const partners = [
        { id: 1, name: "TechFilter Inc.", logo: "/api/placeholder/150/80" },
        { id: 2, name: "PureAir Systems", logo: "/api/placeholder/150/80" },
        { id: 3, name: "AquaPure Solutions", logo: "/api/placeholder/150/80" },
        {
            id: 4,
            name: "Industrial Purifiers",
            logo: "/api/placeholder/150/80",
        },
        {
            id: 5,
            name: "EcoFilter Technologies",
            logo: "/api/placeholder/150/80",
        },
    ];

    const statistics = [
        { id: 1, value: "500+", label: "Clients Worldwide" },
        { id: 2, value: "1,200+", label: "Projects Completed" },
        { id: 3, value: "30+", label: "Years Experience" },
        { id: 4, value: "98%", label: "Client Satisfaction" },
    ];

    const projects = [
        {
            id: 1,
            title: "Municipal Water Treatment Plant",
            location: "Chicago, IL",
            image: "/api/placeholder/400/300",
            category: "Water Filtration",
        },
        {
            id: 2,
            title: "Pharmaceutical Clean Room Air System",
            location: "Boston, MA",
            image: "/api/placeholder/400/300",
            category: "Air Purification",
        },
        {
            id: 3,
            title: "Oil Refinery Filtration System",
            location: "Houston, TX",
            image: "/api/placeholder/400/300",
            category: "Oil Filtration",
        },
        {
            id: 4,
            title: "Manufacturing Dust Collection",
            location: "Detroit, MI",
            image: "/api/placeholder/400/300",
            category: "Dust Collection",
        },
    ];
    const branches = [
        {
            id: 1,
            city: "New York",
            country: "USA",
            address: "123 Filtration Avenue, New York, NY 10001",
            phone: "+1 (212) 555-1234",
            email: "newyork@filtertech.example",
            image: "/api/placeholder/400/300",
        },
        {
            id: 2,
            city: "London",
            country: "UK",
            address: "45 Purification Street, London, EC2A 4BQ",
            phone: "+44 20 7123 4567",
            email: "london@filtertech.example",
            image: "/api/placeholder/400/300",
        },
        {
            id: 3,
            city: "Singapore",
            country: "Singapore",
            address: "78 Cleantech Road, Singapore 569876",
            phone: "+65 6123 4567",
            email: "singapore@filtertech.example",
            image: "/api/placeholder/400/300",
        },
        {
            id: 4,
            city: "Dubai",
            country: "UAE",
            address: "Building 12, Industrial Zone 3, Dubai",
            phone: "+971 4 123 4567",
            email: "dubai@filtertech.example",
            image: "/api/placeholder/400/300",
        },
    ];

    // New data for certificates
    const certificates = [
        {
            id: 1,
            name: "ISO 9001:2015",
            description: "Quality Management System",
            issuer: "International Organization for Standardization",
            year: "2023",
            icon: "/api/placeholder/100/100",
        },
        {
            id: 2,
            name: "ISO 14001:2015",
            description: "Environmental Management System",
            issuer: "International Organization for Standardization",
            year: "2022",
            icon: "/api/placeholder/100/100",
        },
        {
            id: 3,
            name: "ASME Certification",
            description: "Pressure Vessel Design and Manufacturing",
            issuer: "American Society of Mechanical Engineers",
            year: "2023",
            icon: "/api/placeholder/100/100",
        },
        {
            id: 4,
            name: "NSF/ANSI 61",
            description: "Drinking Water System Components",
            issuer: "NSF International",
            year: "2021",
            icon: "/api/placeholder/100/100",
        },
        {
            id: 5,
            name: "CE Mark",
            description: "European Conformity",
            issuer: "European Union",
            year: "2022",
            icon: "/api/placeholder/100/100",
        },
    ];

    const clients = [
        { id: 1, name: "Chevron Corporation", logo: "/api/placeholder/120/80" },
        { id: 2, name: "Pfizer", logo: "/api/placeholder/120/80" },
        { id: 3, name: "General Electric", logo: "/api/placeholder/120/80" },
        { id: 4, name: "City of Seattle", logo: "/api/placeholder/120/80" },
        { id: 5, name: "Samsung Electronics", logo: "/api/placeholder/120/80" },
        { id: 6, name: "Procter & Gamble", logo: "/api/placeholder/120/80" },
    ];

    // Function to change language
    const changeLanguage = (langCode) => {
        setCurrentLang(langCode);
        setIsLangMenuOpen(false);
        // Here you would normally implement actual language switching logic
        // For example, using i18n libraries like react-i18next
    };

    // Close language dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isLangMenuOpen && !event.target.closest(".lang-menu")) {
                setIsLangMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isLangMenuOpen]);

    // Auto-advance carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === carouselSlides.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [carouselSlides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === carouselSlides.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? carouselSlides.length - 1 : prev - 1
        );
    };

    // Find current language name
    const currentLanguageName =
        languages.find((lang) => lang.code === currentLang)?.name || "English";

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <a
                                href="#"
                                className="text-xl font-bold text-blue-700"
                            >
                                FilterTech
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a
                                href="#"
                                className="font-medium text-gray-700 hover:text-blue-700 transition-colors"
                            >
                                Home
                            </a>
                            <a
                                href="#categories"
                                className="font-medium text-gray-700 hover:text-blue-700 transition-colors"
                            >
                                Products
                            </a>
                            <a
                                href="#projects"
                                className="font-medium text-gray-700 hover:text-blue-700 transition-colors"
                            >
                                Projects
                            </a>
                            <a
                                href="#about"
                                className="font-medium text-gray-700 hover:text-blue-700 transition-colors"
                            >
                                About
                            </a>
                            <a
                                href="#partners"
                                className="font-medium text-gray-700 hover:text-blue-700 transition-colors"
                            >
                                Partners
                            </a>
                            <a
                                href="#contact"
                                className="font-medium text-gray-700 hover:text-blue-700 transition-colors"
                            >
                                Contact
                            </a>

                            {/* Language Selector - Desktop */}
                            <div className="relative lang-menu">
                                <button
                                    onClick={() =>
                                        setIsLangMenuOpen(!isLangMenuOpen)
                                    }
                                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-700 transition-colors"
                                >
                                    <Globe size={18} />
                                    <span>{currentLanguageName}</span>
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform ${
                                            isLangMenuOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>

                                {isLangMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() =>
                                                    changeLanguage(lang.code)
                                                }
                                                className={`block w-full text-left px-4 py-2 text-sm ${
                                                    currentLang === lang.code
                                                        ? "bg-blue-50 text-blue-700"
                                                        : "text-gray-700 hover:bg-gray-100"
                                                }`}
                                            >
                                                {lang.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex">
                            {/* Language Selector - Mobile */}
                            <div className="relative mr-4 lang-menu">
                                {isLangMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-10">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() =>
                                                    changeLanguage(lang.code)
                                                }
                                                className={`block w-full text-left px-4 py-2 text-sm ${
                                                    currentLang === lang.code
                                                        ? "bg-blue-50 text-blue-700"
                                                        : "text-gray-700 hover:bg-gray-100"
                                                }`}
                                            >
                                                {lang.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2"
                            >
                                {isMenuOpen ? (
                                    <X size={24} />
                                ) : (
                                    <Menu size={24} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
                            <a
                                href="#"
                                className="block px-3 py-2 font-medium text-gray-700 hover:text-blue-700"
                            >
                                Home
                            </a>
                            <a
                                href="#categories"
                                className="block px-3 py-2 font-medium text-gray-700 hover:text-blue-700"
                            >
                                Products
                            </a>
                            <a
                                href="#projects"
                                className="block px-3 py-2 font-medium text-gray-700 hover:text-blue-700"
                            >
                                Projects
                            </a>
                            <a
                                href="#about"
                                className="block px-3 py-2 font-medium text-gray-700 hover:text-blue-700"
                            >
                                About
                            </a>
                            <a
                                href="#partners"
                                className="block px-3 py-2 font-medium text-gray-700 hover:text-blue-700"
                            >
                                Partners
                            </a>
                            <a
                                href="#contact"
                                className="block px-3 py-2 font-medium text-gray-700 hover:text-blue-700"
                            >
                                Contact
                            </a>

                            {/* Language options in mobile menu */}
                            <div className="px-3 py-2">
                                <div className="font-medium text-gray-700">
                                    Language
                                </div>
                                <div className="mt-1 space-y-1">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() =>
                                                changeLanguage(lang.code)
                                            }
                                            className={`block w-full text-left pl-3 pr-4 py-1 text-sm rounded-md ${
                                                currentLang === lang.code
                                                    ? "bg-blue-50 text-blue-700"
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                        >
                                            {lang.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Carousel/Hero Section */}
            <div className="relative w-full h-96 md:h-screen/2 overflow-hidden">
                {carouselSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
                            index === currentSlide
                                ? "translate-x-0 opacity-100"
                                : "translate-x-full opacity-0"
                        }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4">
                                {slide.title}
                            </h1>
                            <p className="text-lg md:text-xl max-w-2xl">
                                {slide.description}
                            </p>
                            <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}

                {/* Carousel Controls */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Carousel Indicators */}
                <div className="absolute bottom-6 w-full flex justify-center space-x-2">
                    {carouselSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full ${
                                index === currentSlide
                                    ? "bg-blue-600"
                                    : "bg-white bg-opacity-50"
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Categories Section */}
            <section id="categories" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Our Filtration Solutions
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Explore our wide range of industrial filtration
                            solutions for various applications
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                            >
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {category.name}
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        {category.count} products
                                    </p>
                                    <a
                                        href="#"
                                        className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors"
                                    >
                                        View Products →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 bg-blue-700 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {statistics.map((stat) => (
                            <div key={stat.id} className="p-6">
                                <div className="text-4xl md:text-5xl font-bold mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-lg uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Our Recent Projects
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover how our filtration solutions are making a
                            difference across industries
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <div className="text-sm font-medium text-blue-600 mb-1">
                                        {project.category}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {project.title}
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        {project.location}
                                    </p>
                                    <a
                                        href="#"
                                        className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors"
                                    >
                                        View Case Study →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href="#"
                            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                        >
                            View All Projects
                        </a>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section id="partners" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Our Partners
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Working with leading companies to deliver the best
                            filtration solutions
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-12">
                        {partners.map((partner) => (
                            <div key={partner.id} className="p-4">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-16"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Our Clients
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Trusted by industry leaders worldwide
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {clients.map((client) => (
                            <div
                                key={client.id}
                                className="p-4 flex items-center justify-center"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-h-12 grayscale hover:grayscale-0 transition-all"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* NEW: Our Branches Section */}
            <section id="branches" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Our Branches
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            With locations across the globe, we provide local
                            expertise with global capabilities
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {branches.map((branch) => (
                            <div
                                key={branch.id}
                                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-2/5">
                                        <img
                                            src={branch.image}
                                            alt={`${branch.city} Branch`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-6 md:w-3/5">
                                        <div className="flex items-center mb-3">
                                            <Building
                                                size={20}
                                                className="text-blue-600 mr-2"
                                            />
                                            <h3 className="text-xl font-semibold text-gray-800">
                                                {branch.city}, {branch.country}
                                            </h3>
                                        </div>
                                        <div className="space-y-3 text-gray-600">
                                            <p className="flex items-start">
                                                <MapPin
                                                    size={18}
                                                    className="text-blue-600 mr-2 mt-1 flex-shrink-0"
                                                />
                                                <span>{branch.address}</span>
                                            </p>
                                            <p className="flex items-center">
                                                <Phone
                                                    size={18}
                                                    className="text-blue-600 mr-2 flex-shrink-0"
                                                />
                                                <span>{branch.phone}</span>
                                            </p>
                                            <p className="flex items-center">
                                                <Mail
                                                    size={18}
                                                    className="text-blue-600 mr-2 flex-shrink-0"
                                                />
                                                <span>{branch.email}</span>
                                            </p>
                                        </div>
                                        <a
                                            href="#contact"
                                            className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors"
                                        >
                                            Contact This Branch →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW: Our Certificates Section */}
            <section id="certificates" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Our Certificates
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Committed to quality and excellence in all our
                            operations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certificates.map((certificate) => (
                            <div
                                key={certificate.id}
                                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
                            >
                                <div className="mb-4 bg-blue-50 p-4 rounded-full">
                                    <Award
                                        size={48}
                                        className="text-blue-600"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {certificate.name}
                                </h3>
                                <p className="text-gray-600 mb-2">
                                    {certificate.description}
                                </p>
                                <div className="mt-auto">
                                    <p className="text-sm text-gray-500">
                                        Issued by: {certificate.issuer}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Valid until: {certificate.year}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-800">
                                Contact Us
                            </h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Have questions about our filtration solutions?
                                Get in touch with our team.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <div className="mb-6 flex items-start">
                                    <div className="mr-4 text-blue-600">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">
                                            Our Location
                                        </h3>
                                        <p className="text-gray-600">
                                            123 Filtration Way, Industrial Park
                                            <br />
                                            Cityville, CA 90210
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-6 flex items-start">
                                    <div className="mr-4 text-blue-600">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">
                                            Phone
                                        </h3>
                                        <p className="text-gray-600">
                                            +1 (555) 123-4567
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-6 flex items-start">
                                    <div className="mr-4 text-blue-600">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">
                                            Email
                                        </h3>
                                        <p className="text-gray-600">
                                            info@filtertech.example
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <form className="bg-gray-50 p-6 rounded-lg">
                                <div className="mb-4">
                                    <label
                                        htmlFor="name"
                                        className="block text-gray-700 font-medium mb-2"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="email"
                                        className="block text-gray-700 font-medium mb-2"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="message"
                                        className="block text-gray-700 font-medium mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">
                                FilterTech
                            </h3>
                            <p className="text-gray-400">
                                Leading provider of industrial filtration
                                solutions since 1990. Quality, innovation, and
                                reliability in every system.
                            </p>
                            <div className="mt-4 flex space-x-4">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                >
                                    <Facebook size={20} />
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                >
                                    <Twitter size={20} />
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                >
                                    <Instagram size={20} />
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                >
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">
                                Products
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        Water Filtration
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        Air Purification
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        Oil Filtration
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        Dust Collection
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        Chemical Filtration
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">
                                Newsletter
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Subscribe to our newsletter for the latest
                                updates and offers.
                            </p>
                            <form>
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="px-4 py-2 w-full text-gray-800 focus:outline-none rounded-l-md"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                        <p>
                            &copy; {new Date().getFullYear()} FilterTech. All
                            rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FilterMachinesWebsite;
