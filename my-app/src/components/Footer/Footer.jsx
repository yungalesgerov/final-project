import React from "react";
import logo from './eqw 1.svg'
const Footer = () => {
    return (
        <div className="Footer">
            <img src={logo} alt="logo" className="footer-logo" />
            <div className="footer-info">
                <div>г. Москва, Цветной б-р, 40
                    <br />+7 495 771 21 11
                    <br />info@skan.ru</div>
                    <div className="copyright">Copyright. 2022</div>
                <div></div>
            </div>
        </div>
    )
}
export default Footer;