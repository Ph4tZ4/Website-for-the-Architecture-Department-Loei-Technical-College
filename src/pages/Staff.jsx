import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import '../styles/Staff.css';

const Staff = () => {
    const staffMembers = [
        { name: 'Dr. John Doe', role: 'หัวหน้าแผนกวิชา', bio: 'ผู้เชี่ยวชาญด้านการออกแบบที่ยั่งยืน' },
        { name: 'Jane Smith', role: 'ครูชำนาญการพิเศษ', bio: 'ผู้เชี่ยวชาญด้านการวางผังเมือง' },
        { name: 'Michael Brown', role: 'ครูผู้สอน', bio: 'ประวัติศาสตร์และทฤษฎีสถาปัตยกรรม' },
        { name: 'Sarah Wilson', role: 'ครูพิเศษสอน', bio: 'เทคโนโลยี CAD และการสร้างแบบจำลอง 3 มิติ' },
        { name: 'David Lee', role: 'ผู้ดูแลห้องปฏิบัติการ', bio: 'เทคโนโลยีการก่อสร้าง' },
        { name: 'Emily Davis', role: 'เจ้าหน้าที่ธุรการ', bio: 'กิจการนักเรียนนักศึกษา' }
    ];

    return (
        <div className="staff-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">คณะผู้บริหารและครูอาจารย์</h1>
                    <p className="page-subtitle">พบกับทีมงานที่ทุ่มเทเพื่อความสำเร็จของคุณ</p>
                </div>
            </div>

            <div className="container">
                <section className="section">
                    <div className="staff-grid">
                        {staffMembers.map((staff, index) => (
                            <ScrollReveal key={index} threshold={0.1}>
                                <div className="staff-card">
                                    <div className="staff-image-placeholder">
                                        {/* Placeholder for staff image */}
                                        <span>รูปถ่าย</span>
                                    </div>
                                    <div className="staff-info">
                                        <h3 className="staff-name">{staff.name}</h3>
                                        <p className="staff-role">{staff.role}</p>
                                        <p className="staff-bio">{staff.bio}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Staff;
