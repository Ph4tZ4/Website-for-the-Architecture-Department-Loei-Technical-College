import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>แผนกวิชาสถาปัตยกรรม</h3>
                    <p>วิทยาลัยเทคนิคเลย</p>
                </div>
                <div className="footer-section">
                    <h4>ติดต่อเรา</h4>
                    <p>123 ถนนมะลิวัลย์ ต.กุดป่อง อ.เมือง จ.เลย 42000</p>
                    <p>โทรศัพท์: 042-811-591</p>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} แผนกวิชาสถาปัตยกรรม วิทยาลัยเทคนิคเลย สงวนลิขสิทธิ์</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
