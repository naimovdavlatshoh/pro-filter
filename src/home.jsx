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
import CountUp from "react-countup";

import Logo from "./assets/logo.png";
import { GetData } from "./service";
import ProjectModal from "./components/ProjectModal";
import { Link } from "react-router-dom";

// Main App Component
const FilterMachinesWebsite = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(
        localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru"
    );
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPartner, setSelectedPartner] = useState(null);
    const [isModalOpen_, setIsModalOpen_] = useState(false);

    const openModal_ = (partner) => {
        setSelectedPartner(partner);
        setIsModalOpen_(true);
    };

    const closeModal_ = () => {
        setIsModalOpen_(false);
        setSelectedPartner(null);
    };

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };
    const [categories, setCategories] = useState([]);
    const [categoriesfooter, setCategoriesfooter] = useState([]);
    const [projects, setProjects] = useState([]);
    const [partners, setPartners] = useState([]);
    const [certificates, setCertificates] = useState([]);
    const [branches, setBranches] = useState([]);
    const [products, setProducts] = useState([]);

    // Available languages
    const languages = [
        { code: "ru", name: "RU" },
        { code: "en", name: "EN" },
        { code: "uz", name: "UZ" },
    ];

    // Sample data
    const carouselSlides = [
        {
            id: 1,
            image: Banner1,
            titleen: "Industrial Filtration Solutions",
            titleru: "Решения промышленной фильтрации",
            titleuz: "Sanoat filtrlash yechimlari",
            descriptionen:
                "High-quality water and air filtration systems for industrial applications",
            descriptionru:
                "Высококачественные системы фильтрации воды для промышленного и хозяйственного применения",
            descriptionuz:
                "Sanoat ilovalari uchun yuqori sifatli suv va havo filtrlash tizimlari",
        },
        {
            id: 2,
            image: Banner2,
            titleen: "Custom Engineered Systems",
            titleru: "Специально разработанные системы",
            titleuz: "Maxsus muhandislik tizimlari",
            descriptionen:
                "Tailor-made filtration solutions for your specific industry needs",
            descriptionru:
                "Индивидуальные решения по фильтрации для конкретных нужд вашей отрасли",
            descriptionuz:
                "Sizning maxsus sanoat ehtiyojlaringiz uchun moslashtirilgan filtrlash echimlari",
        },
        {
            id: 3,
            image: Banner3,
            titleen: "Global Support & Maintenance",
            titleru: "Глобальная поддержка и обслуживание",
            titleuz: "Global qo'llab-quvvatlash va texnik xizmat ko'rsatish",
            descriptionen:
                "Worldwide installation and maintenance services for all filtration equipment",
            descriptionru:
                "Услуги по установке и обслуживанию всего фильтрационного оборудования по всему миру",
            descriptionuz:
                "Barcha filtrlash uskunalari uchun butun dunyo bo'ylab o'rnatish va texnik xizmat ko'rsatish",
        },
    ];

    useEffect(() => {
        GetData("categorys").then((res) => setCategories(res));
    }, []);
    useEffect(() => {
        GetData("categorys").then((res) =>
            setCategoriesfooter(res.slice(0, 6))
        );
    }, []);
    useEffect(() => {
        GetData("projects").then((res) => setProjects(res.slice(0, 6)));
    }, []);
    useEffect(() => {
        GetData("partners").then((res) => setPartners(res));
    }, []);
    useEffect(() => {
        GetData("certificate").then((res) => setCertificates(res));
    }, []);
    useEffect(() => {
        GetData("branches").then((res) => setBranches(res));
    }, []);
    useEffect(() => {
        GetData("products").then((res) => setProducts(res.slice(0, 6)));
    }, []);

    const statistics = [
        {
            id: 1,
            value: "500+",
            labelen: "Clients Worldwide",
            labeluz: "Mamlakatlar soni",
            labelru: "Клиенты по всему миру",
        },
        {
            id: 2,
            value: "1,200+",
            labelen: "Projects Completed",
            labeluz: "Bajarilgan loyihalar",
            labelru: "Выполненные проекты",
        },
        {
            id: 3,
            value: "30+",
            labelen: "Years Experience",
            labeluz: "Yillik tajriba",
            labelru: "Лет опыта",
        },
        {
            id: 4,
            value: "98%",
            labelen: "Client Satisfaction",
            labeluz: "Mijozlarning qoniqishi",
            labelru: "Удовлетворенность клиентов",
        },
    ];

    // Function to change language
    const changeLanguage = (langCode) => {
        setCurrentLang(langCode);
        localStorage.setItem("lang", langCode);
        window.location.reload();
        setIsLangMenuOpen(false);
    };

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
        languages.find((lang) => lang.code === currentLang)?.name || "Russian";

    const getSrcFromIframe = (iframeHTML) => {
        const match = iframeHTML?.match(/src="(.*?)"/);
        return match ? match[1] : "";
    };

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
                                <img className="h-16 " src={Logo} alt="" />
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a
                                href="#"
                                className="font-medium text-gray-700 hover:text-blue-700 transition-colors"
                            >
                                {currentLang == "en"
                                    ? "Main"
                                    : currentLang == "uz"
                                    ? "Asosiy"
                                    : currentLang == "ru"
                                    ? "Главная"
                                    : "Главная"}
                            </a>
                            <a
                                href="#categories"
                                className="font-medium text-gray-700 hover:text-blue-700 transition-colors"
                            >
                                {currentLang == "en"
                                    ? "Products"
                                    : currentLang == "uz"
                                    ? "Mahsulotlar"
                                    : currentLang == "ru"
                                    ? "Продукты"
                                    : "Продукты"}
                            </a>
                            <a
                                href="#projects"
                                className="font-medium text-gray-700 hover:text-blue-700 transition-colors"
                            >
                                {currentLang == "en"
                                    ? "Projects"
                                    : currentLang == "uz"
                                    ? "Loyihalar"
                                    : currentLang == "ru"
                                    ? "Проекты"
                                    : "Проекты"}
                            </a>
                            <a
                                href="#about"
                                className="font-medium text-gray-700 hover:text-blue-700 transition-colors"
                            >
                                {currentLang == "en"
                                    ? "About"
                                    : currentLang == "uz"
                                    ? "Biz haqimizda"
                                    : currentLang == "ru"
                                    ? "О нас"
                                    : "О нас"}
                            </a>
                            <a
                                href="#partners"
                                className="font-medium text-gray-700 hover:text-blue-700 transition-colors"
                            >
                                {currentLang == "en"
                                    ? "Partners"
                                    : currentLang == "uz"
                                    ? "Hamkorlar"
                                    : currentLang == "ru"
                                    ? "Партнеры"
                                    : "Партнеры"}
                            </a>
                            <a
                                href="#contact"
                                className="font-medium text-gray-700 hover:text-blue-700 transition-colors"
                            >
                                {currentLang == "en"
                                    ? "Contact"
                                    : currentLang == "uz"
                                    ? "Aloqa"
                                    : currentLang == "ru"
                                    ? "Контакты"
                                    : "Контакты"}
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
                                {currentLang == "en"
                                    ? "Main"
                                    : currentLang == "uz"
                                    ? "Asosiy"
                                    : currentLang == "ru"
                                    ? "Главная"
                                    : "Главная"}
                            </a>
                            <a
                                href="#categories"
                                className="block px-3 py-2 font-medium text-gray-700 hover:text-blue-700"
                            >
                                {currentLang == "en"
                                    ? "Products"
                                    : currentLang == "uz"
                                    ? "Mahsulotlar"
                                    : currentLang == "ru"
                                    ? "Продукты"
                                    : "Продукты"}
                            </a>
                            <a
                                href="#projects"
                                className="block px-3 py-2 font-medium text-gray-700 hover:text-blue-700"
                            >
                                {currentLang == "en"
                                    ? "Projects"
                                    : currentLang == "uz"
                                    ? "Loyihalar"
                                    : currentLang == "ru"
                                    ? "Проекты"
                                    : "Проекты"}
                            </a>
                            <a
                                href="#about"
                                className="block px-3 py-2 font-medium text-gray-700 hover:text-blue-700"
                            >
                                {currentLang == "en"
                                    ? "About"
                                    : currentLang == "uz"
                                    ? "Biz haqimizda"
                                    : currentLang == "ru"
                                    ? "О нас"
                                    : "О нас"}
                            </a>
                            <a
                                href="#partners"
                                className="block px-3 py-2 font-medium text-gray-700 hover:text-blue-700"
                            >
                                {currentLang == "en"
                                    ? "Partners"
                                    : currentLang == "uz"
                                    ? "Hamkorlar"
                                    : currentLang == "ru"
                                    ? "Партнеры"
                                    : "Партнеры"}
                            </a>
                            <a
                                href="#contact"
                                className="block px-3 py-2 font-medium text-gray-700 hover:text-blue-700"
                            >
                                {currentLang == "en"
                                    ? "Contact"
                                    : currentLang == "uz"
                                    ? "Aloqa"
                                    : currentLang == "ru"
                                    ? "Контакты"
                                    : "Контакты"}
                            </a>

                            {/* Language options in mobile menu */}
                            <div className="px-3 py-2">
                                <div className="font-medium text-gray-700">
                                    {currentLang == "en"
                                        ? "Language"
                                        : currentLang == "uz"
                                        ? "Til"
                                        : currentLang == "ru"
                                        ? "Язык"
                                        : "Язык"}
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
                            alt={slide.titleru}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
                            <h1
                                className="text-3xl md:text-5xl font-bold mb-4"
                                data-aos="fade-up"
                            >
                                {currentLang == "en"
                                    ? slide.titleen
                                    : currentLang == "uz"
                                    ? slide.titleuz
                                    : slide.titleru}
                            </h1>
                            <p
                                className="text-lg md:text-xl max-w-2xl"
                                data-aos="fade-up"
                            >
                                {currentLang == "en"
                                    ? slide.descriptionen
                                    : currentLang == "uz"
                                    ? slide.descriptionuz
                                    : slide.descriptionru}
                            </p>
                            {/* <a
                                href="#about"
                                className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                            >
                                {currentLang == "en"
                                    ? "Learn More"
                                    : currentLang == "uz"
                                    ? "Ko'proq o'qish"
                                    : currentLang == "ru"
                                    ? "Узнать больше"
                                    : "Узнать больше"}
                            </a> */}
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
                        <h2
                            className="text-3xl font-bold text-gray-800"
                            data-aos="fade-up"
                        >
                            {currentLang == "en"
                                ? "Our Filtration Solutions"
                                : currentLang == "uz"
                                ? "Bizning filtrlash yechimlarimiz"
                                : currentLang == "ru"
                                ? "Наши решения по фильтрации"
                                : "Наши решения по фильтрации"}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((category) => (
                            <div
                                data-aos="fade-up"
                                key={category.id}
                                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {currentLang == "en"
                                            ? category?.translations?.en?.name
                                            : currentLang == "uz"
                                            ? category?.translations?.uz?.name
                                            : currentLang == "ru"
                                            ? category?.translations?.ru?.name
                                            : category?.translations?.ru?.name}
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        {currentLang == "en"
                                            ? "products"
                                            : currentLang == "uz"
                                            ? "mahsulotlar"
                                            : currentLang == "ru"
                                            ? "продукты"
                                            : "продукты"}{" "}
                                        - {category.products_count}
                                    </p>
                                    <Link
                                        to={`/category/${category.id}/${
                                            currentLang == "en"
                                                ? category?.translations?.en
                                                      ?.name
                                                : currentLang == "uz"
                                                ? category?.translations?.uz
                                                      ?.name
                                                : currentLang == "ru"
                                                ? category?.translations?.ru
                                                      ?.name
                                                : category?.translations?.ru
                                                      ?.name
                                        }`}
                                        className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors"
                                    >
                                        {currentLang == "en"
                                            ? "View Products →"
                                            : currentLang == "uz"
                                            ? "Barcha mahsulotlar →"
                                            : currentLang == "ru"
                                            ? "Посмотреть товары →"
                                            : "Посмотреть товары →"}
                                    </Link>
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
                                    <CountUp
                                        end={parseFloat(
                                            stat.value.replace(/[^\d.]/g, "")
                                        )}
                                        duration={2}
                                        suffix={
                                            stat.value.includes("%")
                                                ? "%"
                                                : stat.value.includes("+")
                                                ? "+"
                                                : ""
                                        }
                                        decimals={
                                            stat.value.includes(".") ? 1 : 0
                                        }
                                    />
                                </div>
                                <div className="text-lg uppercase tracking-wider">
                                    {currentLang == "en"
                                        ? stat.labelen
                                        : currentLang == "uz"
                                        ? stat.labeluz
                                        : currentLang == "ru"
                                        ? stat.labelru
                                        : stat.labeluz}
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
                        <h2
                            className="text-3xl font-bold text-gray-800"
                            data-aos="fade-up"
                        >
                            {currentLang == "en"
                                ? "Our Recent Projects"
                                : currentLang == "uz"
                                ? "Bizning eng so'nggi loyihalarimiz"
                                : currentLang == "ru"
                                ? "Наши недавние проекты"
                                : "Наши недавние проекты"}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div
                                data-aos="fade-up"
                                key={project.id}
                                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                            >
                                <img
                                    src={project.image}
                                    alt={"No image"}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-lg font-normal text-gray-800 line-clamp-3">
                                        {currentLang == "en"
                                            ? project.translations.en
                                                  .description
                                            : currentLang == "uz"
                                            ? project.translations.uz
                                                  .description
                                            : currentLang == "ru"
                                            ? project.translations.ru
                                                  .description
                                            : project.translations.ru
                                                  .description}
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        {project.location}
                                    </p>
                                    <button
                                        onClick={() => openModal(project)}
                                        href="#"
                                        className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors"
                                    >
                                        {currentLang == "en"
                                            ? "View Case Study →"
                                            : currentLang == "uz"
                                            ? "Batafsil ma'lumot →"
                                            : currentLang == "ru"
                                            ? "Посмотреть больше →"
                                            : "Посмотреть больше →"}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to={"projects"}
                            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                        >
                            {currentLang == "en"
                                ? "View All Projects"
                                : currentLang == "uz"
                                ? "Barcha loyihalar →"
                                : currentLang == "ru"
                                ? "Посмотреть все проекты →"
                                : "Посмотреть все проекты →"}
                        </Link>
                    </div>
                </div>
                <ProjectModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    project={selectedProject}
                    currentLang={currentLang}
                />
            </section>

            {/* Partners Section */}
            <section id="partners" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2
                            className="text-3xl font-bold text-gray-800"
                            data-aos="fade-up"
                        >
                            {currentLang == "en"
                                ? "Our Partners"
                                : currentLang == "uz"
                                ? "Bizning hamkorlarimiz"
                                : "Наши партнеры"}
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            {currentLang == "en"
                                ? "Working with leading companies to deliver the best filtration solutions"
                                : currentLang == "uz"
                                ? "Eng yaxshi filtrlash yechimlarini yetkazib berish uchun yetakchi kompaniyalar bilan ishlash"
                                : "Сотрудничество с ведущими компаниями для предоставления лучших решений в области фильтрации"}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        {partners.map((partner) => (
                            <div
                                data-aos="flip-left"
                                onClick={() => openModal_(partner)}
                                key={partner.id}
                                className="p-4 rounded-md hover:shadow-xl transition-shadow"
                            >
                                <img
                                    src={partner.image}
                                    alt={partner.name}
                                    className="h-[200px] w-full object-cover rounded-md "
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {isModalOpen_ && selectedPartner && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg p-4 max-w-3xl w-[500px] relative h-[700px]">
                            <button
                                onClick={closeModal_}
                                className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
                            >
                                &times;
                            </button>
                            <img
                                src={selectedPartner.image}
                                alt={selectedPartner.name}
                                className="w-full h-full rounded-md object-contain"
                            />
                        </div>
                    </div>
                )}
            </section>

            {/* Clients Section */}
            {/* <section className="py-16 bg-gray-50">
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
            </section> */}
            {/* NEW: Our Branches Section */}
            <section id="branches" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2
                            className="text-3xl font-bold text-gray-800"
                            data-aos="fade-up"
                        >
                            {currentLang == "en"
                                ? "Our Branches"
                                : currentLang == "uz"
                                ? "Bizning Filiallarimiz"
                                : "Наши филиалы"}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {branches.map((branch) => (
                            <div
                                data-aos="flip-left"
                                key={branch.id}
                                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="md:w-3/5">
                                        <iframe
                                            className="w-full h-[200px]"
                                            src={getSrcFromIframe(
                                                currentLang === "en"
                                                    ? branch.translations.en
                                                          .location
                                                    : currentLang === "uz"
                                                    ? branch.translations.uz
                                                          .location
                                                    : branch.translations.ru
                                                          .location
                                            )}
                                            loading="lazy"
                                        ></iframe>
                                    </div>
                                    <div className="p-6 md:w-2/5">
                                        <div className="flex items-center mb-3">
                                            <Building
                                                size={20}
                                                className="text-blue-600 mr-2"
                                            />
                                            <h3 className="text-xl font-semibold text-gray-800">
                                                {currentLang == "en"
                                                    ? branch.translations.en
                                                          .city
                                                    : currentLang == "uz"
                                                    ? branch.translations.uz
                                                          .city
                                                    : branch.translations.ru
                                                          .city}
                                            </h3>
                                        </div>
                                        <div className="space-y-3 text-gray-600">
                                            <p className="flex items-start">
                                                <MapPin
                                                    size={18}
                                                    className="text-blue-600 mr-2 mt-1 flex-shrink-0"
                                                />
                                                <span>
                                                    {currentLang == "en"
                                                        ? branch.translations.en
                                                              .address
                                                        : currentLang == "uz"
                                                        ? branch.translations.uz
                                                              .address
                                                        : branch.translations.ru
                                                              .address}
                                                </span>
                                            </p>
                                            <p className="flex items-center">
                                                <Phone
                                                    size={18}
                                                    className="text-blue-600 mr-2 flex-shrink-0"
                                                />
                                                <span>
                                                    {currentLang == "en"
                                                        ? branch.translations.en
                                                              .phone
                                                        : currentLang == "uz"
                                                        ? branch.translations.uz
                                                              .phone
                                                        : branch.translations.ru
                                                              .phone}
                                                </span>
                                            </p>
                                        </div>
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
                        <h2
                            className="text-3xl font-bold text-gray-800"
                            data-aos="fade-up"
                        >
                            {currentLang == "en"
                                ? "Our Certificates"
                                : currentLang == "uz"
                                ? "Bizning sertifikatlarimiz"
                                : "Наши сертификаты"}
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            {currentLang == "en"
                                ? "Committed to quality and excellence in all our operations"
                                : currentLang == "uz"
                                ? "Barcha operatsiyalarimizda sifat va mukammallikka sodiqmiz"
                                : "Приверженность качеству и совершенству во всех наших операциях"}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certificates.map((certificate) => (
                            <div
                                data-aos="fade-up"
                                onClick={() => openModal_(certificate)}
                                key={certificate.id}
                                className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
                            >
                                <img
                                    src={certificate.image}
                                    className="h-[300px] w-full object-cover rounded-lg"
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {isModalOpen_ && selectedPartner && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg p-4 max-w-3xl w-[500px] relative h-[700px]">
                            <button
                                onClick={closeModal_}
                                className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
                            >
                                &times;
                            </button>
                            <img
                                src={selectedPartner.image}
                                alt={selectedPartner.name}
                                className="w-full h-full rounded-md object-contain"
                            />
                        </div>
                    </div>
                )}
            </section>

            {/* Contact Section */}

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row  gap-8">
                        <div>
                            <img
                                src={Logo}
                                className="h-[100px] w-[100px] object-contain mb-3"
                                alt=""
                            />
                            <p className="text-gray-400">
                                {currentLang == "en"
                                    ? "Leading provider of industrial filtration solutions since 1990. Quality, innovation, and reliability in every system."
                                    : currentLang == "uz"
                                    ? " Sanoat filtratsiyasining yetakchi provayderi 1990 yildan buyon yechimlar. Sifat, innovatsiya va har bir tizimda ishonchlilik."
                                    : "Ведущий поставщик промышленных фильтрационных решений с 1990 года. Качество, инновации и надежность в каждой   системе. "}
                                "
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
                                {currentLang == "en"
                                    ? "Categories"
                                    : currentLang == "uz"
                                    ? "Kategoriyalar"
                                    : "Категории"}
                            </h3>
                            <ul className="space-y-2">
                                {categoriesfooter?.map((category, index) => (
                                    <li>
                                        <Link
                                            to={`/category/${category.id}/${
                                                currentLang == "en"
                                                    ? category?.translations?.en
                                                          ?.name
                                                    : currentLang == "uz"
                                                    ? category?.translations?.uz
                                                          ?.name
                                                    : currentLang == "ru"
                                                    ? category?.translations?.ru
                                                          ?.name
                                                    : category?.translations?.ru
                                                          ?.name
                                            }`}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {currentLang == "en"
                                                ? category?.translations?.en
                                                      ?.name
                                                : currentLang == "uz"
                                                ? category?.translations?.uz
                                                      ?.name
                                                : currentLang == "ru"
                                                ? category?.translations?.ru
                                                      ?.name
                                                : category?.translations?.ru
                                                      ?.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">
                                {currentLang == "en"
                                    ? "Products"
                                    : currentLang == "uz"
                                    ? "Mahsulotlar"
                                    : "Продукты"}
                            </h3>
                            <ul className="space-y-2">
                                {products.map((product) => (
                                    <li>
                                        <button
                                            href="#"
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {currentLang == "en"
                                                ? product?.translations?.en
                                                      ?.name
                                                : currentLang == "uz"
                                                ? product?.translations?.uz
                                                      ?.name
                                                : product?.translations?.ru
                                                      ?.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 ProFilter.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FilterMachinesWebsite;
