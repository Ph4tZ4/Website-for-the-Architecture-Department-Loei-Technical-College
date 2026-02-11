import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero">
            <div
                className="hero-bg"
                style={{ transform: `translateY(${offset * 0.5}px)` }} // Parallax effect
            ></div>
            <div className="hero-overlay"></div>

            <div className="hero-content container">
                <div className="hero-text-wrapper">
                    <p className="hero-eyebrow">Loei Technical College</p>
                    <h1 className="hero-title">
                        <span className="line">Department of</span>
                        <span className="line highlight">Architecture</span>
                    </h1>
                    <p className="hero-description">
                        สร้างสรรค์พื้นที่แห่งอนาคต ด้วยภูมิปัญญาและเทคโนโลยี
                    </p>

                    <div className="hero-buttons">
                        <Link to="/curriculum" className="btn btn-primary">
                            ดูหลักสูตร
                        </Link>
                        <Link to="/contact" className="btn btn-outline-white">
                            ติดต่อเรา
                        </Link>
                    </div>
                </div>

                <div className="hero-scroll-indicator">
                    <span>Scroll</span>
                    <div className="line"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
