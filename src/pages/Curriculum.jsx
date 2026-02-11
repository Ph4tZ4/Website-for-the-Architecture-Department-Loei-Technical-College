import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { CheckCircle, Download } from 'lucide-react';
import '../styles/Curriculum.css';

const Curriculum = () => {
    const [activeTab, setActiveTab] = useState('cert');

    const certSubjects = [
        'การเขียนแบบสถาปัตยกรรม',
        'วัสดุก่อสร้าง',
        'การออกแบบเบื้องต้น',
        'การเขียนแบบด้วยคอมพิวเตอร์ (CAD)',
        'ระบบโครงสร้าง',
        'ประวัติศาสตร์สถาปัตยกรรม'
    ];

    const diplomaSubjects = [
        'การออกแบบสถาปัตยกรรมขั้นสูง',
        'เทคโนโลยีอาคาร',
        'การปฏิบัติวิชาชีพ',
        'การออกแบบชุมชนเมือง',
        'หลักการออกแบบตกแต่งภายใน',
        'สถาปัตยกรรมสีเขียว'
    ];

    return (
        <div className="curriculum-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">หลักสูตร</h1>
                    <p className="page-subtitle">หลักสูตรครอบคลุมที่ออกแบบมาเพื่อสถาปนิกในอนาคต</p>
                </div>
            </div>

            <div className="container">
                <div className="tabs-container">
                    <button
                        className={`tab-btn ${activeTab === 'cert' ? 'active' : ''}`}
                        onClick={() => setActiveTab('cert')}
                    >
                        ประกาศนียบัตรวิชาชีพ (ปวช.)
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'diploma' ? 'active' : ''}`}
                        onClick={() => setActiveTab('diploma')}
                    >
                        ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)
                    </button>
                </div>

                <div className="tab-content">
                    <ScrollReveal key={activeTab}>
                        <div className="program-card">
                            <h2 className="program-title">
                                {activeTab === 'cert' ? 'ประกาศนียบัตรวิชาชีพ (ปวช.)' : 'ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)'}
                            </h2>
                            <p className="program-desc">
                                {activeTab === 'cert'
                                    ? 'หลักสูตรพื้นฐาน 3 ปีที่มุ่งเน้นพื้นฐานการเขียนแบบสถาปัตยกรรม หลักการออกแบบ และเทคนิคการก่อสร้าง'
                                    : 'หลักสูตรขั้นสูง 2 ปีที่เน้นการแก้ปัญหาการออกแบบที่ซับซ้อน การปฏิบัติวิชาชีพ และเทคโนโลยีสถาปัตยกรรมเฉพาะทาง'}
                            </p>

                            <div className="subjects-grid">
                                <h3 className="subjects-title">รายวิชาที่สำคัญ</h3>
                                <ul className="subjects-list">
                                    {(activeTab === 'cert' ? certSubjects : diplomaSubjects).map((subject, index) => (
                                        <li key={index} className="subject-item">
                                            <CheckCircle size={20} color="var(--color-secondary)" />
                                            <span>{subject}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="program-footer">
                                <button className="btn btn-primary-dark">
                                    <Download size={18} style={{ marginRight: '8px' }} />
                                    ดาวน์โหลดหลักสูตรฉบับเต็ม
                                </button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
};

export default Curriculum;
