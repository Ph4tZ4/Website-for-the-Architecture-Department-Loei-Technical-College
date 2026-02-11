import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Camera, MapPin, Calendar } from 'lucide-react';
import '../styles/Activities.css';

const Activities = () => {
    const activities = [
        {
            id: 1,
            title: 'ทัศนศึกษาดูงานสถาปัตยกรรมอีสาน',
            date: '25 มกราคม 2569',
            location: 'ขอนแก่น - นครพนม',
            image: 'https://images.unsplash.com/photo-1548504772-20dc3e06f97f?q=80&w=2836&auto=format&fit=crop',
            desc: 'นักศึกษา ปวส.1 ศึกษาดูงานสถาปัตยกรรมพื้นถิ่นและวัดวาอารามในภาคตะวันออกเฉียงเหนือ เพื่อนำมาประยุกต์ใช้ในการออกแบบ'
        },
        {
            id: 2,
            title: 'อบรมเชิงปฏิบัติการ "BIM Technology"',
            date: '10 ธันวาคม 2568',
            location: 'ห้องปฏิบัติการคอมพิวเตอร์ 1',
            image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2940&auto=format&fit=crop',
            desc: 'วิทยากรจากบริษัทชั้นนำมาให้ความรู้เกี่ยวกับเทคโนโลยี BIM (Building Information Modeling) แก่นักศึกษาทุกชั้นปี'
        },
        {
            id: 3,
            title: 'โครงการจิตอาสาพัฒนาโรงเรียน',
            date: '15 พฤศจิกายน 2568',
            location: 'โรงเรียนบ้านหนองปลาดุก',
            image: 'https://images.unsplash.com/photo-1529390003868-6c6b5a053324?q=80&w=2930&auto=format&fit=crop',
            desc: 'นักศึกษาร่วมกันทาสีอาคารเรียนและปรับปรุงสนามเด็กเล่นให้กับโรงเรียนในชนบท'
        },
        {
            id: 4,
            title: 'พิธีไหว้ครูช่าง',
            date: '20 มิถุนายน 2568',
            location: 'ลานอเนกประสงค์',
            image: 'https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?q=80&w=2940&auto=format&fit=crop',
            desc: 'พิธีบวงสรวงพระวิษณุกรรมและไหว้ครูอาจารย์เพื่อความเป็นสิริมงคลในการเรียนการสอน'
        }
    ];

    return (
        <div className="activities-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">กิจกรรมและบรรยากาศการเรียน</h1>
                    <p className="page-subtitle">ชีวิตในรั้ววิทยาลัยที่เต็มไปด้วยประสบการณ์และความทรงจำ</p>
                </div>
            </div>

            <div className="container section">
                <div className="activities-grid">
                    {activities.map((item) => (
                        <ScrollReveal key={item.id} threshold={0.1}>
                            <div className="activity-card">
                                <div className="activity-img-wrapper">
                                    <img src={item.image} alt={item.title} />
                                    <div className="date-badge">
                                        <Calendar size={14} /> {item.date}
                                    </div>
                                </div>
                                <div className="activity-details">
                                    <h3>{item.title}</h3>
                                    <div className="location">
                                        <MapPin size={14} /> {item.location}
                                    </div>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Activities;
