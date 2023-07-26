import React from "react";
import AboutI from "../../img/about_img.png"

export const About = () => {
    return (
        <section id="about">
            <div className="container about_container">
                <div>
                    <img className="about_img" src={AboutI} alt="about_img" />
                </div>
                <div className="about_content">
                    <p className="about_text-1">About us</p>
                    <h2 className="about_title">Platform Dedicated To Promoting </h2>
                    <p className="about_text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum
                        sagittis ultrices consectetur adipiscing elit. fringilla quisque pulvinar..</p>
                    <button className="about_btn">
                        What we do?
                    </button>
                </div>
            </div>
        </section>

    )
}