import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">เกี่ยวกับเรา</h1>
                    <p className="page-subtitle">เรียนรู้เกี่ยวกับประวัติศาสตร์และอนาคตของเรา</p>
                </div>
            </div>

            <div className="container">
                <section className="section">
                    <ScrollReveal>
                        <div className="about-grid">
                            <div className="about-image-placeholder">
                                {/* Placeholder for Department Image */}
                                <div className="placeholder-text">รูปภาพแผนก</div>
                            </div>
                            <div className="about-content">
                                <h2 className="section-title-left">ประวัติความเป็นมา</h2>
                                <p>
                                    แผนกวิชาสถาปัตยกรรม วิทยาลัยเทคนิคเลย ก่อตั้งขึ้นเพื่อรองรับความต้องการที่เพิ่มขึ้นของผู้เชี่ยวชาญที่มีทักษะในด้านสิ่งแวดล้อมสรรค์สร้าง
                                    นับตั้งแต่เริ่มก่อตั้ง เรามุ่งมั่นที่จะให้การศึกษาสายอาชีพคุณภาพสูงที่ผสมผสานวิสัยทัศน์ทางศิลปะเข้ากับความแม่นยำทางเทคนิค
                                </p>
                                <p>
                                    ตลอดระยะเวลาที่ผ่านมา เราได้ผลิตบัณฑิตจำนวนมากที่ประสบความสำเร็จในอาชีพสถาปัตยกรรม การก่อสร้าง และการออกแบบทั่วประเทศไทย
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>

                <section className="section">
                    <ScrollReveal>
                        <div className="vision-mission-grid">
                            <div className="vm-card">
                                <h3>วิสัยทัศน์ของเรา</h3>
                                <p>เป็นผู้นำด้านการศึกษาวิชาชีพสถาปัตยกรรม ส่งเสริมนวัตกรรมและการออกแบบที่ยั่งยืนที่เหมาะสมกับบริบทท้องถิ่นและระดับสากล</p>
                            </div>
                            <div className="vm-card">
                                <h3>พันธกิจของเรา</h3>
                                <ul>
                                    <li>ให้ความเป็นเลิศในการศึกษาวิชาชีพสถาปัตยกรรม</li>
                                    <li>ส่งเสริมการวิจัยและนวัตกรรมในภูมิปัญญาท้องถิ่นและเทคโนโลยีสมัยใหม่</li>
                                    <li>ปลูกฝังจรรยาบรรณวิชาชีพและความรับผิดชอบต่อสังคมในหมู่นักเรียน</li>
                                    <li>ให้บริการชุมชนผ่านบริการทางวิชาการและโครงการพัฒนาที่ยั่งยืน</li>
                                </ul>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>
            </div>
        </div>
    );
};

export default About;
