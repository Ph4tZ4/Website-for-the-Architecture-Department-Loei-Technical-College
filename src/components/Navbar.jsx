import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
        window.scrollTo(0, 0);
    }, [location]);

    const toggleDropdown = (name) => {
        if (activeDropdown === name) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(name);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    ARCH LOEI
                </Link>

                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </div>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links">หน้าหลัก</Link>
                    </li>

                    {/* About Dropdown */}
                    <li className="nav-item dropdown"
                        onMouseEnter={() => window.innerWidth > 960 && setActiveDropdown('about')}
                        onMouseLeave={() => window.innerWidth > 960 && setActiveDropdown(null)}
                        onClick={() => window.innerWidth <= 960 && toggleDropdown('about')}
                    >
                        <span className="nav-links dropdown-toggle">
                            เกี่ยวกับเรา <ChevronDown size={14} className={`dropdown-icon ${activeDropdown === 'about' ? 'rotate' : ''}`} />
                        </span>
                        <div className={`dropdown-menu ${activeDropdown === 'about' ? 'show' : ''}`}>
                            <Link to="/about" className="dropdown-link">ประวัติและวิสัยทัศน์</Link>
                            <Link to="/staff" className="dropdown-link">บุคลากร</Link>
                        </div>
                    </li>

                    {/* Academics Dropdown */}
                    <li className="nav-item dropdown"
                        onMouseEnter={() => window.innerWidth > 960 && setActiveDropdown('academics')}
                        onMouseLeave={() => window.innerWidth > 960 && setActiveDropdown(null)}
                        onClick={() => window.innerWidth <= 960 && toggleDropdown('academics')}
                    >
                        <span className="nav-links dropdown-toggle">
                            วิชาการ <ChevronDown size={14} className={`dropdown-icon ${activeDropdown === 'academics' ? 'rotate' : ''}`} />
                        </span>
                        <div className={`dropdown-menu ${activeDropdown === 'academics' ? 'show' : ''}`}>
                            <Link to="/curriculum" className="dropdown-link">หลักสูตร</Link>
                            <Link to="/admissions" className="dropdown-link">สมัครเรียน</Link>
                        </div>
                    </li>

                    {/* Showcase Dropdown */}
                    <li className="nav-item dropdown"
                        onMouseEnter={() => window.innerWidth > 960 && setActiveDropdown('showcase')}
                        onMouseLeave={() => window.innerWidth > 960 && setActiveDropdown(null)}
                        onClick={() => window.innerWidth <= 960 && toggleDropdown('showcase')}
                    >
                        <span className="nav-links dropdown-toggle">
                            ผลงานและกิจกรรม <ChevronDown size={14} className={`dropdown-icon ${activeDropdown === 'showcase' ? 'rotate' : ''}`} />
                        </span>
                        <div className={`dropdown-menu ${activeDropdown === 'showcase' ? 'show' : ''}`}>
                            <Link to="/portfolio" className="dropdown-link">ผลงานนักศึกษา</Link>
                            <Link to="/activities" className="dropdown-link">กิจกรรม</Link>
                        </div>
                    </li>

                    <li className="nav-item">
                        <Link to="/contact" className="nav-links">ติดต่อเรา</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
