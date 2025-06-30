import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css"; 
import card1 from "./img/card1.jpg";
import card2 from "./img/card2.jpg";
import card3 from "./img/card3.jpeg";
import card4 from "./img/card4.jpeg";
import card5 from "./img/card5.jpeg";
import card6 from "./img/card6.jpeg";
import card7 from "./img/card7.jpeg";
import card8 from "./img/card8.jpeg";
import card9 from "./img/card9.jpeg";
import card10 from "./img/card10.jpeg";

import logo from "./img/logo3.png";  
import c01 from "./img/c01.jpg";
import c02 from "./img/c02.jpg";
import c03 from "./img/c03.jpg";

const images = [c01, c02, c03];

const cardData = [
    { image: card1, title: "Elegant Necklace", Price: "₹250", Rating: "⭐⭐⭐⭐☆" },
        { image: card2, title: "Azilaa", Price: "₹699",Rating: "⭐⭐⭐⭐⭐" },
    { image: card3, title: "Love Beeded", Price: "₹490",Rating: "⭐⭐⭐⭐" },
    { image: card4, title: "Navaratri Special Blue Cotton", Price: "₹680",Rating: "⭐⭐⭐⭐⭐" },
    { image: card5, title: "Haldi set", Price: "₹999",Rating: "⭐⭐⭐⭐☆" },
    { image: card6, title: "Garga", Price: "₹750",Rating: "⭐⭐⭐☆" },
    { image: card7, title: "Fabric Earings", Price: "₹560" ,Rating: "⭐⭐⭐⭐"},
    { image: card8, title: "Dangle Earings", Price: "₹350",Rating: "⭐⭐⭐⭐☆" },
    { image: card9, title: "Amari", Price: "₹483",Rating: "⭐⭐⭐⭐" },
    { image: card10, title: "Bhagwa", Price: "₹750" ,Rating: "⭐⭐⭐⭐⭐"},
];

const Navbar = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>  
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="Jewellery Logo" />
                </div>

                <div className="brand-name">
                    <span>Timeless Trinkets</span>
                </div>
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/"> 🏠Home</Link></li>
                    <li className="nav-item"><Link to="/about"> ℹ️ About</Link></li>
                    <li className="nav-item"><Link to="/services"> 🛠️Services</Link></li>
                    <li className="nav-item"><Link to="/contact"> 📞Contact</Link></li>
                </ul>
            </nav>

            <div className="carousel">
                <img src={images[currentIndex]} alt="Jewellery Banner" />
            </div>
            <br></br>
           <center> <h1>Our Collections</h1></center>
           <br></br>

            <div className="card-container">
    {cardData.map((card, index) => (
        <div key={index} className="card">
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <h1><p>{card.Price}</p></h1>
            <p>Ratings:{card.Rating}</p>  

            <button className="buy-now">🛍️ Buy Now</button>
            <button className="add-to-cart">🛒 Add to Cart</button>
        </div>
    ))}
</div>

            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <h3>About Us</h3>
                        <p>Timeless Trinkets offers exquisite jewellery collections crafted with love and precision.</p>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <p>Email: support@timelesstrinkets.com</p>
                        <p>Phone: +91 9344943585
                        </p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 Timeless Trinkets. All rights reserved.</p>
                </div>
            </footer>
        </> 
    );
};

export default Navbar;
