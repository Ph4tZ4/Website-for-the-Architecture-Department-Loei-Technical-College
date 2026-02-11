import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Search } from 'lucide-react';
import '../styles/Portfolio.css';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        { id: 1, title: 'ศูนย์การเรียนรู้ชุมชน', category: 'Thesis', student: 'นายสมชาย ใจดี', image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2865&auto=format&fit=crop' },
        { id: 2, title: 'บ้านพักอาศัย Eco-Living', category: 'Residential', student: 'นางสาวสมหญิง รักเรียน', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2940&auto=format&fit=crop' },
        { id: 3, title: 'โมเดลอาคารสาธารณะ', category: 'Model', student: 'นายวิชัย เก่งกล้า', image: 'https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=2708&auto=format&fit=crop' },
        { id: 4, title: 'รีสอร์ทเพื่อสิ่งแวดล้อม', category: 'Thesis', student: 'นางสาวมานี มีใจ', image: 'https://images.unsplash.com/photo-1565514020176-db7936a28186?q=80&w=2940&auto=format&fit=crop' },
        { id: 5, title: 'Sketch Design: Urban Park', category: 'Sketches', student: 'นายปิติ พอเพียง', image: 'https://images.unsplash.com/photo-1586282391129-76a6df840fd0?q=80&w=2787&auto=format&fit=crop' },
        { id: 6, title: 'โรงเรียนอนุบาลทางเลือก', category: 'Design', student: 'นางสาวชูใจ ใฝ่ดี', image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop' },
    ];

    const categories = ['All', 'Thesis', 'Residential', 'Design', 'Model', 'Sketches'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <div className="portfolio-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">ผลงานนักศึกษา</h1>
                    <p className="page-subtitle">ความคิดสร้างสรรค์และทักษะทางวิชาชีพของนักศึกษาสถาปัตยกรรม เทคนิคเลย</p>
                </div>
            </div>

            <div className="container section">
                <div className="filter-bar">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="portfolio-grid">
                    {filteredProjects.map((project) => (
                        <ScrollReveal key={project.id}>
                            <div className="portfolio-item">
                                <div className="portfolio-image-wrapper">
                                    <img src={project.image} alt={project.title} />
                                    <div className="portfolio-overlay">
                                        <h3>{project.title}</h3>
                                        <p>{project.student}</p>
                                        <span className="category-tag">{project.category}</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
