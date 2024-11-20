
import React from 'react';
import logo from '../../../images/footer.png';
import pay from '../../../images/payment.png';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className='footer-container p-4'>
                <ul>
                    <p className='fs-6 fw-bold'>CONTACT INFO</p>
                    <li><i className="fas fa-map-marker-alt"></i> IIT Patna, Bihta, Bihar - 801106</li>
                    <li><i className="fas fa-phone-alt"></i>+91 8197026959</li>
                    <li><i className="fas fa-envelope"></i>zenithelements@gmail.com</li>
                    <ul className='footer-icon'>
                        <li className='me-2 icon'><i className="fab fa-instagram-square"></i></li>
                    </ul>
                </ul>
                <ul>
                    <p className='fs-6 fw-bold'>INFORMATION</p>
                    <li><i className="fal fa-window-minimize"></i> About Us</li>
                    <li><i className="fal fa-window-minimize"></i> Delivery</li>
                    <li><i className="fal fa-window-minimize"></i> Diwali Sale</li>
                </ul>
            </div>
            <div className='footer-copyright'>
                <p>Pay with</p>
                <img className='img-fluid' src={pay} alt="" />
            </div>
        </div>
    );
};

export default Footer;