import React from "react";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Samarqanddagi uy loyihasi",
            image: "/images/project1.jpg",
        },
        {
            id: 2,
            title: "Toshkent ofis loyihasi",
            image: "/images/project2.jpg",
        },
        {
            id: 3,
            title: "Andijon sanoat korxonasi",
            image: "/images/project3.jpg",
        },
    ];

    return (
        <div id="projects" className="py-16 bg-white container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
                O'rnatilgan Loyihalar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((proj) => (
                    <div
                        key={proj.id}
                        className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                    >
                        <img
                            src={proj.image}
                            alt={proj.title}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">
                                {proj.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
