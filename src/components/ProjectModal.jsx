// components/ProjectModal.jsx
import React from "react";

const ProjectModal = ({ isOpen, onClose, project, currentLang }) => {
    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-3">
            <div className="bg-white p-3 rounded-lg w-full max-w-4xl shadow-lg ">
                <div className="flex justify-end mb-3">
                    <button
                        onClick={onClose}
                        className=" text-red-500 hover:text-black text-3xl"
                    >
                        &times;
                    </button>
                </div>

                <div className="flex flex-col md:flex-row gap-5 w-full items-center">
                    <img
                        src={project.image}
                        alt="Project"
                        className="w-full md:w-1/2 h-64 object-cover rounded"
                    />

                    <h3 className="mt-4 text-xl font-semibold text-gray-800">
                        {currentLang === "en"
                            ? project.translations.en.description
                            : currentLang === "uz"
                            ? project.translations.uz.description
                            : project.translations.ru.description}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
