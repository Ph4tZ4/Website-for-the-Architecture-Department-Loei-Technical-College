import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Download, Calendar, FileText, CheckCircle } from 'lucide-react';
import '../styles/Admissions.css';

const Admissions = () => {
    return (
        <div className="admissions-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">การรับสมัครเข้าศึกษา</h1>
                    <p className="page-subtitle">มาร่วมเป็นส่วนหนึ่งของครอบครัวสถาปัตย์ เทคนิคเลย</p>
                </div>
            </div>

            <div className="container section">
                <div className="admissions-layout">
                    <div className="admissions-main">
                        <section className="admission-section">
                            <ScrollReveal>
                                <h2 className="section-heading">กำหนดการรับสมัคร ปีการศึกษา 2569</h2>
                                <div className="schedule-card">
                                    <div className="schedule-item">
                                        <div className="date-box">
                                            <span className="month">ต.ค. - ธ.ค.</span>
                                            <span className="year">68</span>
                                        </div>
                                        <div className="schedule-detail">
                                            <h3>รอบโควตา (Quota)</h3>
                                            <p>สำหรับนักเรียนที่มีผลการเรียนดี หรือมีความสามารถพิเศษ</p>
                                        </div>
                                    </div>
                                    <div className="schedule-item">
                                        <div className="date-box">
                                            <span className="month">ก.พ. - มี.ค.</span>
                                            <span className="year">69</span>
                                        </div>
                                        <div className="schedule-detail">
                                            <h3>รอบสอบคัดเลือกทั่วไป (Direct Admission)</h3>
                                            <p>สอบข้อเขียนและสอบสัมภาษณ์</p>
                                        </div>
                                    </div>
                                    <div className="schedule-item">
                                        <div className="date-box">
                                            <span className="month">เม.ย.</span>
                                            <span className="year">69</span>
                                        </div>
                                        <div className="schedule-detail">
                                            <h3>รอบรับเพิ่ม (ถ้ามี)</h3>
                                            <p>ติดตามประกาศทางเว็บไซต์</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </section>

                        <section className="admission-section">
                            <ScrollReveal delay={0.1}>
                                <h2 className="section-heading">คุณสมบัติผู้สมัคร</h2>
                                <div className="requirements-grid">
                                    <div className="req-card">
                                        <h3>ระดับ ปวช.</h3>
                                        <ul>
                                            <li><CheckCircle size={16} /> จบการศึกษาระดับ ม.3 หรือเทียบเท่า</li>
                                            <li><CheckCircle size={16} /> เกรดเฉลี่ยสะสมไม่ต่ำกว่า 2.00</li>
                                            <li><CheckCircle size={16} /> มีความสนใจด้านศิลปะและการออกแบบ</li>
                                        </ul>
                                    </div>
                                    <div className="req-card">
                                        <h3>ระดับ ปวส.</h3>
                                        <ul>
                                            <li><CheckCircle size={16} /> จบ ปวช. สาขาสถาปัตยกรรม หรือเทียบเท่า</li>
                                            <li><CheckCircle size={16} /> หรือจบ ม.6 (ต้องเรียนวิชาปรับพื้นฐาน)</li>
                                            <li><CheckCircle size={16} /> ผ่านการสอบสัมภาษณ์</li>
                                        </ul>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </section>
                    </div>

                    <div className="admissions-sidebar">
                        <ScrollReveal delay={0.2}>
                            <div className="sidebar-card">
                                <h3><FileText size={20} /> เอกสารประกอบการสมัคร</h3>
                                <ul className="doc-list">
                                    <li>สำเนาระเบียนแสดงผลการเรียน (รบ.)</li>
                                    <li>สำเนาบัตรประชาชน (ตนเอง/บิดา/มารดา)</li>
                                    <li>สำเนาทะเบียนบ้าน</li>
                                    <li>รูปถ่าย 1 นิ้ว 2 รูป</li>
                                    <li>แฟ้มสะสมผลงาน (Portfolio)</li>
                                </ul>
                            </div>

                            <div className="sidebar-card download-card">
                                <h3>ดาวน์โหลดเอกสาร</h3>
                                <button className="btn-download">
                                    <Download size={18} /> ใบสมัครเรียน
                                </button>
                                <button className="btn-download">
                                    <Download size={18} /> ระเบียบการ 2569
                                </button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admissions;
