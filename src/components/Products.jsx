import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GetData } from "../service";

const Products = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate();
    const lang = localStorage.getItem("lang");

    useEffect(() => {
        GetData(`product/category/${id}/`).then((res) => {
            setProducts(res);
            setLoading(false);
        });
    }, [id]);

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };

    const backText =
        lang === "en"
            ? "Go Back"
            : lang === "ru"
            ? "Назад"
            : lang === "uz"
            ? "Orqaga"
            : "Назад";

    const title =
        lang === "en"
            ? "Products"
            : lang === "ru"
            ? "Продукты"
            : lang === "uz"
            ? "Mahsulotlar"
            : "Продукты";

    const loadingText =
        lang === "en"
            ? "Loading..."
            : lang === "ru"
            ? "Загрузка..."
            : lang === "uz"
            ? "Yuklanmoqda..."
            : "Загрузка...";

    const notFoundText =
        lang === "en"
            ? "No products found."
            : lang === "ru"
            ? "Товары не найдены."
            : lang === "uz"
            ? "Hech qanday mahsulot topilmadi."
            : "Товары не найдены.";

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <button
                onClick={() => navigate(-1)}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
                ← {backText}
            </button>

            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
                {title}
            </h1>

            {loading ? (
                <div className="text-center text-gray-500">{loadingText}</div>
            ) : products.length === 0 ? (
                <div className="text-center text-gray-500">{notFoundText}</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => openModal(product)}
                            className="cursor-pointer bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all"
                        >
                            <img
                                src={product?.product_image[0]?.image}
                                alt={product?.name}
                                className="w-full h-[300px] object-cover rounded-md mb-4"
                            />
                            <h2 className="text-lg font-semibold text-gray-800">
                                {lang === "en"
                                    ? product?.translations?.en?.name
                                    : lang === "uz"
                                    ? product?.translations?.uz?.name
                                    : product?.translations?.ru?.name}
                            </h2>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                                {lang === "en"
                                    ? product?.translations?.en?.description
                                    : lang === "uz"
                                    ? product?.translations?.uz?.description
                                    : product?.translations?.ru?.description}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal */}
            {isModalOpen && selectedProduct && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4 overflow-y-auto">
                    <div className="bg-white max-w-5xl w-full rounded-lg shadow-lg relative my-8">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-700 hover:text-red-600 text-xl font-bold z-10"
                        >
                            ✕
                        </button>

                        <div className="flex flex-col md:flex-row gap-6 p-6">
                            {/* Asosiy rasm chapda */}
                            <div className="md:w-1/2">
                                <img
                                    src={
                                        selectedProduct?.product_image[0]?.image
                                    }
                                    alt={selectedProduct?.name}
                                    className="w-full h-[400px] object-cover rounded"
                                />
                            </div>

                            {/* Nom + tavsif o‘ng tomonda */}
                            <div className="md:w-1/2 flex flex-col justify-start">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    {lang === "en"
                                        ? selectedProduct?.translations?.en
                                              ?.name
                                        : lang === "uz"
                                        ? selectedProduct?.translations?.uz
                                              ?.name
                                        : selectedProduct?.translations?.ru
                                              ?.name}
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    {lang === "en"
                                        ? selectedProduct?.translations?.en
                                              ?.description
                                        : lang === "uz"
                                        ? selectedProduct?.translations?.uz
                                              ?.description
                                        : selectedProduct?.translations?.ru
                                              ?.description}
                                </p>
                            </div>
                        </div>

                        {/* Qolgan rasmlar pastda */}
                        {selectedProduct?.product_image?.length > 1 && (
                            <div className="px-6 pb-6">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">
                                    {lang === "en"
                                        ? "More images"
                                        : lang === "ru"
                                        ? "Больше изображений"
                                        : "Qo‘shimcha rasmlar"}
                                </h3>
                                <div className="flex gap-3 overflow-x-auto">
                                    {selectedProduct.product_image
                                        .slice(1)
                                        .map((img, idx) => (
                                            <img
                                                key={idx}
                                                src={img.image}
                                                alt={`thumb-${idx}`}
                                                className="h-20 w-20 object-cover rounded border"
                                            />
                                        ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Products;
