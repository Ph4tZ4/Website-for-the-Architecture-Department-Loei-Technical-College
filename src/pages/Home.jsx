import React from 'react';
import Hero from '../components/Hero';
import ScrollReveal from '../components/ScrollReveal';
import { ArrowRight, Compass, Ruler, PenTool } from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />

            <section className="section intro-section">
                <div className="container">
                    <ScrollReveal>
                        <div className="split-layout">
                            <div className="split-content-large">
                                <h2 className="display-heading">
                                    Fostering <br />
                                    <span className="text-outline">Creativity</span> & <br />
                                    Technical Excellence
                                </h2>
                            </div>
                            <div className="split-content-small">
                                <p className="intro-text">
                                    ยินดีต้อนรับสู่แผนกวิชาสถาปัตยกรรม วิทยาลัยเทคนิคเลย เรามุ่งมั่นที่จะสร้างสถาปนิกที่มีคุณภาพ
                                    ด้วยหลักสูตรที่ผสมผสานระหว่างศิลปะและวิศวกรรม เพื่อตอบโจทย์โลกอนาคต
                                </p>
                                <a href="/about" className="link-arrow">
                                    อ่านเพิ่มเติมเกี่ยวกับเรา <ArrowRight size={18} />
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="section features-section">
                <div className="container">
                    <div className="features-asym-grid">
                        <ScrollReveal>
                            <div className="feature-box large">
                                <div className="feature-icon"><PenTool size={48} /></div>
                                <h3>การออกแบบนวัตกรรม</h3>
                                <p>เรียนรู้กระบวนการคิดเชิงออกแบบ (Design Thinking) และการประยุกต์ใช้นวัตกรรมในการแก้ปัญหาทางสถาปัตยกรรม</p>
                                <span className="feature-number">01</span>
                            </div>
                        </ScrollReveal>

                        <div className="feature-col">
                            <ScrollReveal delay={0.1}>
                                <div className="feature-box small">
                                    <div className="feature-icon"><Ruler size={32} /></div>
                                    <h3>ความแม่นยำทางเทคนิค</h3>
                                    <p>ฝึกฝนทักษะการเขียนแบบและเทคโนโลยีการก่อสร้าง</p>
                                    <span className="feature-number">02</span>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={0.2}>
                                <div className="feature-box small">
                                    <div className="feature-icon"><Compass size={32} /></div>
                                    <h3>การปฏิบัติจริง</h3>
                                    <p>ลงมือทำจริงในทุกขั้นตอน ตั้งแต่ร่างแบบจนถึงการก่อสร้าง</p>
                                    <span className="feature-number">03</span>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section news-section">
                <div className="container">
                    <ScrollReveal>
                        <h2 className="section-title" data-subtitle="UPDATES">ข่าวประชาสัมพันธ์</h2>
                    </ScrollReveal>

                    <div className="masonry-grid">
                        <ScrollReveal>
                            <div className="news-card featured">
                                <div className="news-image news-img-1"></div>
                                <div className="news-content">
                                    <span className="news-date">10 FEB 2026</span>
                                    <h3>เปิดรับสมัครนักศึกษาใหม่ ประจำปีการศึกษา 2569</h3>
                                    <p>ร่วมเป็นส่วนหนึ่งของครอบครัวสถาปัตยกรรม เปิดรับสมัครรอบโควตาและสอบตรง...</p>
                                    <a href="#" className="read-more">อ่านต่อ</a>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <div className="news-card">
                                <div className="news-content">
                                    <span className="news-date">05 FEB 2026</span>
                                    <h3>นิทรรศการ "Arch Loei Showcase"</h3>
                                    <p>ขอเชิญชมนิทรรศการแสดงผลงานนักศึกษา ณ หอศิลป์จังหวัด...</p>
                                    <a href="#" className="read-more">อ่านต่อ</a>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="news-card">
                                <div className="news-content">
                                    <span className="news-date">28 JAN 2026</span>
                                    <h3>ปรับปรุงห้องปฏิบัติการใหม่</h3>
                                    <p>อัพเกรดอุปกรณ์คอมพิวเตอร์และเครื่องพิมพ์ 3 มิติ เพื่อการเรียนรู้...</p>
                                    <a href="#" className="read-more">อ่านต่อ</a>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
