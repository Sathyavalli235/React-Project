import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo3.png";
import "./style.css";  

import cus from "./img/cus.jpeg";
import custom1 from "./img/custom1.jpeg";
import polishing from "./img/polishing.jpeg";
import engraving from "./img/engraving.jpeg";
import resize from "./img/resize.jpeg";


const Services = () => {
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

            <div className="services-container">
                <h1 className="services-title">Our Exclusive Services</h1>
                <p className="services-description">Elevate your jewellery experience with our premium offerings.</p>

                <div className="service-list">
                    <div className="service-card">
                        <img src={cus} alt="Custom Design" className="service-img" />
                        <h2>🛠️ Custom Jewellery Design</h2>
                        <p>Design your dream jewellery with our skilled artisans.</p>
                    </div>
                    <div className="service-card">
                        <img src={custom1} alt="Jewellery Repair" className="service-img" />
                        <h2>🔧 Jewellery Repair & Restoration</h2>
                        <p>Expert repairs and restorations to keep your jewellery flawless.</p>
                    </div>
                    <div className="service-card">
                        <img src={polishing} alt="Polishing" className="service-img" />
                        <h2>✨ Gold & Silver Polishing</h2>
                        <p>Bring back the shine of your treasured jewellery.</p>
                    </div>
                    <div className="service-card">
                        <img src={engraving} alt="Engraving" className="service-img" />
                        <h2>🖋️ Custom Engraving</h2>
                        <p>Make your jewellery unique with personalized engravings.</p>
                    </div>
                    <div className="service-card">
    <img src={resize} alt="Jewellery Resizing" className="service-img" />
    <h2>📏 Jewellery Resizing & Alteration</h2>
    <p>Get your rings, bracelets, and necklaces resized or redesigned for a perfect fit.</p>
</div>
                </div>

                <div className="cta-section">
                    <h2>💎 Book a Consultation Today!</h2>
                    <p>Get in touch with us to create or restore your perfect piece.</p>
                    <button className="cta-button">Contact Us</button>
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

export default Services;
