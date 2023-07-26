import React from "react";
import Icon1 from "../../img/play-icon.png"
import Icon2 from "../../img/hero_img.svg"

export const Hero = () => {
    return (
        <section id="hero">
            <div className="container hero_container">
                <div className="hero_content">
                    <p className="hero_text-1">Smart Business</p>
                    <h1 className="hero_title">Connecting people is our <span className="hero_span">business</span></h1>
                    <p className="hero_text-2">As a rule the organization settles on the inventive and media choices.Regularly
                        it supplies supporting statistical.</p>
                    <button className="hero_btn-1">
                        Get Started
                    </button>
                    <button className="hero_btn-2">
                    </button>
                    <img className="hero_btn-2_icon" src={Icon1} alt="hero_icon" />
                    <p className="hero_btn-2_text">Play Video</p>
                </div>
                <div>
                    <img className="hero_img" src={Icon2} alt="hero_img" />
                </div>
            </div>
        </section>

    )
}