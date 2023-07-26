import React from "react";
import LogoF from "../img/footer_logo.png"
import Media from "../img/Socialmedia.png"

export const Footer = () => {
    return (
        <footer id="footer">
            <div className="container footer_container">
                <div className="footer_1">
                    <div className="footer_1_main">
                        <a href="#"><img className="footer_1_main_img" src={LogoF} alt="footer_logo" /></a>
                        <p className="footer_1_main_text-1">Smart business</p>
                        <p className="footer_1_main_text-2">Community</p>
                    </div>
                    <div className="footer_1_resource">
                        <p className="footer_1_resource-text-1">Resources</p>
                        <p className="footer_1_resource-text-2">Start Business</p>
                        <p className="footer_1_resource-text-3">Digital Marketing</p>
                        <p className="footer_1_resource-text-4">Course Creation</p>
                        <p className="footer_1_resource-text-5">Business Accelerator</p>
                    </div>
                    <div className="footer_1_mission">
                        <p className="footer_1_mission_text-1">Mission</p>
                        <p className="footer_1_mission_text-2">About Digital Analyst</p>
                        <p className="footer_1_mission_text-3">Team</p>
                        <p className="footer_1_mission_text-4">Become a Partner</p>
                        <p className="footer_1_mission_text-5">Privacy Policy</p>
                    </div>
                    <div className="footer_1_main_contact">
                        <p className="footer_1_main_contact_text-1">Contact</p>
                        <address>
                            <a className="footer_1_main_contact_tel" href="tel:041-774073">041-774073</a>
                            <a className="footer_1_main_contact_mail" href="mailto:hello@digitalanalyst.org">hello@digitalanalyst.org</a>
                        </address>
                        <a className="footer_1_main_contact_text-2" href="#">Contact Form</a>
                    </div>
                </div>
                <div className="footer_2">
                    <div className="footer_2_text">
                        <p className="footer_2_text-1">© 2021 DigitalAnalyst.org. A 50 non-profit organization. EIN: -3410655</p>
                    </div>
                    <div className="footer_2_app">
                        <a href="#"><img className="footer_2_app_img" src={Media} alt="social media" /></a>
                    </div>
                    <button className="footer_2_btn">
                        Sign Up
                    </button>
                </div>
            </div>
        </footer>

    )
}