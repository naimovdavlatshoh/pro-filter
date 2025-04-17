import { Route, Routes } from "react-router-dom";
import Home from "./home";
import { useEffect } from "react";
import Products from "./components/Products";
import Projectsall from "./components/Projectsall";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="category/:id/:name" element={<Products />} />
            <Route path="projects" element={<Projectsall />} />
        </Routes>
    );
};

export default App;
