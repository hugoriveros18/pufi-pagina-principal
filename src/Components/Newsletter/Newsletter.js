import React from "react";
import './Newsletter.css';
import { NewsletterForm } from "../NewsletterForm/NewsletterForm";

function Newsletter(){
    return(
        <>
            <div className="instagram-container">
                <p className="insta">INSTAGRAM</p>
                <p className="hashtag">#ESPUFI</p>
            </div>
            <div className="instagram-images-container">
                <div className="images-section">
                    <div className="photo insta-one"></div>
                    <div className="photo insta-two"></div>
                    <div className="photo insta-three"></div>
                    <div className="photo insta-four"></div>
                    <div className="photo insta-five"></div>
                    <div className="photo insta-six"></div>
                </div>
            </div>
            <div className="newsletter-container">
                <div className="newsletter-subscription-container">
                    <h4 className="newsletter">NEWSLETTER</h4>
                    <p className="subscribe">SUSCRIBITE</p>
                    <p className="subscribe-description">Y enterate de todas las novedades</p>
                    <NewsletterForm/>
                </div>
            </div>
        </>
    )
}

export { Newsletter }