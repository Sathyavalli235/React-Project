import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"; 
import Navbar from "./Navbar";
import About from "./About";  
import Services from"./Services";
import Contact from "./Contact";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Navbar />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services/>}></Route>
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </HashRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
