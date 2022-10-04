import React from "react";
import './Footer.css';
import copyrightIcon from '../../Assets/copyright-icon-black.png';
import selloGarantia from '../../Assets/sello-seguridad.png';
import escudoGarantia from '../../Assets/escudo-seguridad.png';
import facebookIcon from '../../Assets/facebook.png';
import twitterIcon from '../../Assets/twitter.png';
import instagramIcon from '../../Assets/instagram.png';
import brandLive from '../../Assets/brandlive.PNG';

function Footer(){
    return(
        <footer className="footer-container">
            <div className="footer-links-container">
                <section className="footer-logo-container">
                    <p>Pufi</p>
                    <img src={copyrightIcon} alt="Copyright icon"/>
                </section>
                <ul className="links-list-container">
                    <li className="footer-item">PUFI RAIN</li>
                    <li className="footer-item">PUFI PUFF</li>
                    <li className="footer-item">PUFI CART</li>
                    <li className="footer-item">PUFI NAP</li>
                </ul>
                <div className="footer-separator"></div>
                <ul className="links-list-container">
                    <li className="footer-item">CONTACTO</li>
                    <li className="footer-item">AYUDA</li>
                    <li className="footer-item">CÓMO COMPRAR</li>
                    <li className="footer-item">TÉRMINOS & CONDICIONES</li>
                </ul>
                <div className="footer-separator"></div>
                <div className="garantia-compra-container">
                    <p>COMPRA 100% SEGURA</p>
                    <div className="sellos-garantia-container">
                        <img src={selloGarantia} alt="sello garantia"/>
                        <img src={escudoGarantia} alt="escudo seguridad"/>
                        <p>COMPRÁ CON LA GARANTIA DE PUFI</p>
                    </div>
                </div>
                <div className="footer-separator"></div>
                <div className="redes-sociales-container">
                    <p>SEGUINOS EN</p>
                    <img src={facebookIcon} alt="Facebook"/>
                    <img src={twitterIcon} alt="Facebook"/>
                    <img src={instagramIcon} alt="Instagram"/>
                </div>
            </div>
            <div className="copyright-container">
                <p>PUFI Copyright 2017 - Todos los derechos reservados</p>
                <img src={brandLive} alt="Brandlive"/>
            </div>
        </footer>
    )
}

export { Footer }