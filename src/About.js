import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo3.png";
import about from "./img/about.jpg"; 
import "./style.css";  

const About = () => {
    return (
        <>
            {/* Navbar Section */}
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

            <div className="about-container">
                <div className="about-header">
                    <h1>About Us</h1>
                    <p>Discover the story behind **Timeless Trinkets**</p>
                </div>

                <div className="about-content">
                    <div className="about-section">
                        <img src={about} alt="About Timeless Trinkets" className="about-img"/>
                        <p>
                            Welcome to **Timeless Trinkets**, where elegance meets craftsmanship. 
                            Our journey began with a passion for designing exquisite jewellery that 
                            blends tradition with modern aesthetics. Each piece we create reflects 
                            precision, artistry, and timeless beauty.
                        </p>
                    </div>

                    <div className="about-section">
                        <h2>Our Story</h2>
                        <p>
                            From a small idea to a renowned jewellery brand, **Timeless Trinkets** 
                            has grown with the love and trust of our customers. We believe in 
                            curating pieces that tell a story, making every moment special.
                        </p>
                    </div>

                    <div className="about-section">
                        <h2>Why Choose Us?</h2>
                        <ul>
                            <li>✨ **Premium Quality** - Handpicked materials and expert craftsmanship.</li>
                            <li>💎 **Unique Designs** - A blend of modern and traditional styles.</li>
                            <li>🛍 **Affordable Luxury** - Stunning jewellery at reasonable prices.</li>
                            <li>💖 **Customer Satisfaction** -Personalized service and secure shopping.</li>
                        </ul>
                    </div>

                    <div className="about-section">
                        <h2>Customer Testimonials</h2>
                        <p>⭐⭐⭐⭐⭐ "Absolutely love my purchase from Timeless Trinkets! Stunning design and great quality!" – **Riya M.**</p>
                        <p>⭐⭐⭐⭐⭐ "The perfect blend of elegance and tradition. A must-buy!" – **Sneha P.**</p>
                    </div>

                    <div className="about-section">
                        <h2>Our Vision & Mission</h2>
                        <p>
                            <strong>Vision:</strong> To become a global leader in handcrafted jewellery, 
                            offering timeless elegance worldwide.  
                        </p>
                        <p>
                            <strong>Mission:</strong> To bring joy and confidence to customers by providing 
                            high-quality, unique, and affordable jewellery.
                        </p>
                    </div>

                    <div className="about-section">
                        <h2>Connect With Us</h2>
                        <p>Follow us on social media for the latest updates and exclusive collections:</p>
                        <ul className="social-links">
                            <li><Link to="#">Instagram</Link></li>
                            <li><Link to="#">Facebook</Link></li>
                            <li><Link to="#">Twitter</Link></li>
                        </ul>
                    </div>
                </div>
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
                        <p>Phone: +91 9344943585</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 Timeless Trinkets. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default About;
