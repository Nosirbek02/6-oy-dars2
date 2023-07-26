import React from "react";
import logo from "../img/header_logo.svg"

export const Header = () => {
    return (
        <div className="container header_container">
            <div className="header_img">
                <a className="header_logo" href="#"><img src={logo} alt="header_logo" /></a>
            </div>
            <div className="header_content">
                <a className="header_link-1" href="#"> Home </a>
                <a className="header_link-2" href="#"> About </a>
                <a className="header_link-3" href="#">Services</a>
                <a className="header_link-4" href="#">Reviews</a>
            </div>
            <button className="header_btn">
                Get Started
            </button>
            <span className="header_line-1" />
            <span className="header_line-2" />
        </div>
    )
}