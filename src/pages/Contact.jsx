import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">ติดต่อเรา</h1>
                    <p className="page-subtitle">เรายินดีที่จะรับฟังจากคุณ</p>
                </div>
            </div>

            <div className="container">
                <div className="contact-grid">
                    <ScrollReveal>
                        <div className="contact-info">
                            <h2 className="section-title-left">ช่องทางการติดต่อ</h2>
                            <p className="contact-desc">
                                ไม่ว่าคุณจะมีคำถามเกี่ยวกับหลักสูตร การรับสมัคร หรือเพียงแค่ต้องการเยี่ยมชมวิทยาเขต โปรดติดต่อเรา
                            </p>

                            <div className="info-item">
                                <div className="icon-box"><MapPin size={24} /></div>
                                <div>
                                    <h4>ที่อยู่</h4>
                                    <p>แผนกวิชาสถาปัตยกรรม วิทยาลัยเทคนิคเลย<br />123 ถนนมะลิวัลย์ ต.กุดป่อง อ.เมือง จ.เลย 42000</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-box"><Phone size={24} /></div>
                                <div>
                                    <h4>โทรศัพท์</h4>
                                    <p>042-811-591</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-box"><Mail size={24} /></div>
                                <div>
                                    <h4>อีเมล</h4>
                                    <p>arch.loei@example.com</p>
                                </div>
                            </div>

                            <div className="social-links">
                                <a href="#" className="social-btn"><Facebook /></a>
                                <a href="#" className="social-btn"><Instagram /></a>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <h3>ส่งข้อความถึงเรา</h3>
                            <div className="form-group">
                                <label>ชื่อของคุณ</label>
                                <input type="text" placeholder="ชื่อ-นามสกุล" />
                            </div>
                            <div className="form-group">
                                <label>ที่อยู่อีเมล</label>
                                <input type="email" placeholder="example@email.com" />
                            </div>
                            <div className="form-group">
                                <label>หัวข้อ</label>
                                <input type="text" placeholder="สอบถามเรื่องการรับสมัคร" />
                            </div>
                            <div className="form-group">
                                <label>ข้อความ</label>
                                <textarea rows="5" placeholder="มีอะไรให้เราช่วย?"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary-dark full-width">ส่งข้อความ</button>
                        </form>
                    </ScrollReveal>
                </div>

                <section className="section map-section">
                    <ScrollReveal>
                        <div className="map-container">
                            {/* Placeholder for Google Map */}
                            <div className="map-placeholder">
                                <MapPin size={48} color="var(--color-primary)" />
                                <p>แผนที่ Google Map</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>
            </div>
        </div>
    );
};

export default Contact;
