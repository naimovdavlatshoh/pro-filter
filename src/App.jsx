import { Route, Routes } from "react-router-dom";
import Home from "./home";
import { useEffect } from "react";
import Products from "./components/Products";
import Projectsall from "./components/Projectsall";
import AOS from "aos";
import "aos/dist/aos.css";


const App = () => { 
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration
            once: true, // whether animation should happen only once
        });
    }, []);
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="category/:id/:name" element={<Products />} />
            <Route path="projects" element={<Projectsall />} />
        </Routes>
    );
};

export default App;
