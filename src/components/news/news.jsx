import React from "react";

export const News = () => {
    return (
        <section id="news">
            <div className="container news_container">
                <h2 className="news_title">Sign Up to Our Newsletter</h2>
                <p className="news_text">Yours could be one of them.</p>
                <form className="form">
                    <input className="input" type="email" placeholder="Enter your email" aria-label=" email" />
                    <button className="btn">Send</button>
                </form>
            </div>
        </section>

    )
}