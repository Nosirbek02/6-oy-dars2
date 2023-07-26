import React from "react";
import Customers1 from "../../img/cta.svg"
import Customers2 from "../../img/Rectangle 9.png"
import Customers3 from "../../img/avatar1.svg"
import Customers4 from "../../img/Rectangle 9.png"
import Customers5 from "../../img/avatar1.png"

export const Customers = () => {
    return (
        <section id="customers">
            <div className="container customers_container">
                <div>
                    <div className="customers_content">
                        <h2 className="customers_title">What Our Customers are Saying.</h2>
                        <button className="customers_btn"><img src={Customers1} alt /></button>
                    </div>
                </div>
                <div className="customers_cards">
                    <div className="customer_card-1">
                        <img className="customer_card-1_img" src={Customers2} alt="customers_card_img" />
                        <img className="customer_card-1_img-1" src={Customers3} alt />
                        <p className="customer_card-1_text-1">I recently concluded a complete messaging revamp for an exciting
                            com</p>
                        <span className="customer_card-1_span" />
                        <p className="customer_card-1_text-2">Leo Aminoff</p>
                        <p className="customer_card-1_text-3">Product Designer</p>
                    </div>
                    <div className="customer_card-2">
                        <img className="customer_card-1_img" src={Customers4} alt="customers_card_img" />
                        <img className="customer_card-2_img-2" src={Customers5} alt />
                        <p className="customer_card-2_text-1">I recently concluded a complete messaging revamp for an exciting com</p>
                        <span className="customer_card-2_span" />
                        <p className="customer_card-2_text-2">Carla Dias</p>
                        <p className="customer_card-2_text-3">Product Designer</p>
                    </div>
                </div>
            </div>
        </section>
    )
}