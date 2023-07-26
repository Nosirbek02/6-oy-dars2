import React from "react";
import Feature1 from "../../img/1st feature.svg"
import Feature2 from "../../img/Group 154.png"
import Feature3 from "../../img/final icon.png"

export const Feature = () => {
    return (
        <section id="feature">
            <div className="container feature_container">
                <h2 className="feature_title">How We Work</h2>
                <ul className="feature_list">
                    <li className="feature_item-1">
                        <img className="feature_Img-1" src={Feature1} alt="feature_Img-1" />
                        <h3 className="feature_title-1">Start Design </h3>
                        <p className="feature_text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra suscipit
                            adipiscing elit.</p>
                    </li>
                    <li className="feature_item-2">
                        <img className="feature_Img-2" src={Feature2} alt="feature_Img-2" />
                        <h3 className="feature_title-2">Go to Code</h3>
                        <p className="feature_text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra suscipit
                            adipiscing elit.</p>
                    </li>
                    <li className="feature_item-3">
                        <img className="feature_Img-3" src={Feature3} alt="feature_Img-3" />
                        <h3 className="feature_title-3">Final Deliverd</h3>
                        <p className="feature_text-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra suscipit
                            adipiscing elit.</p>
                    </li>
                </ul>
            </div>
        </section>

    )
}