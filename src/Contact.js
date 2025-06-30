import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo3.png";
import "./style.css";  

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <>
            {/* Navbar */}
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

            {/* Contact Section */}
            <div className="contact-container">
                <h1 className="contact-title">📞 Get in Touch</h1>
                <p className="contact-description">We'd love to hear from you! Fill out the form below or visit us.</p>

                <div className="contact-content">
                    <div className="contact-form">
                        <h2>📩 Send Us a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Your Name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                            />
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Your Email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                            />
                            <textarea 
                                name="message" 
                                placeholder="Your Message" 
                                rows="4" 
                                value={formData.message} 
                                onChange={handleChange} 
                                required 
                            ></textarea>
                            <button type="submit" className="submit-btn">Submit</button>
                        </form>
                    </div>

                    <div className="contact-info">
                        <h2>🏬 Our Store</h2>
                        <p>📍 Address: 123, Jewel Street, Chennai, India</p>
                        <p>📞 Phone: +91 93449 43585</p>
                        <p>✉️ Email: support@timelesstrinkets.com</p>

                        <iframe
                            title="Google Map"
                            className="google-map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.878807497353!2d-73.98715558459534!3d40.74881797932709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQ0JzU1LjAiTiA3M8KwNTknMTEuMCJX!5e0!3m2!1sen!2sus!4v1634080875325!5m2!1sen!2sus"
                            
                        ></iframe>
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
                        <p>Phone: +91 93449 43585</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 Timeless Trinkets. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Contact;
