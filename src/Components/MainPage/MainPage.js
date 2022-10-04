import {useState} from "react";
import './MainPage.css';
import copyrightIcon from '../../Assets/copyright-icon.png';
import umbrellaIcon from '../../Assets/umbrella.png';
import puffIcon from '../../Assets/bean-bag.png';
import cartIcon from '../../Assets/shopping-cart.png';
import napIcon from '../../Assets/pillow.png';
import downArrow from '../../Assets/expand-arrow.svg';

function MainPage({moveToSection}) {

    // STATES
    const [currentBackground,setCurrentBackground] = useState("first background");

    return (
        <div className={`main-page-container ${currentBackground === "first background" && 'first-background'} ${currentBackground === "second background" && 'second-background'} ${currentBackground === "third background" && 'third-background'}`}>
            {/* HEADER */}
            <header className="header-container">
                <div className="logo-container">
                    <p>Pufi</p>
                    <img src={copyrightIcon} alt="Copyrigth icon"/>
                </div>
                <nav className="navbar-container">
                    <ul className="navbar-list-container">
                        <li onClick={() => moveToSection("PUFF")} className="navbar-element pufi-puff">
                            <img className="pufi-puff-img" src={puffIcon} alt="Puff"/>
                            <h2 className="pufi-puff-h2">PUFI PUFF</h2>
                        </li>
                        <div></div>
                        <li onClick={() => moveToSection("RAIN")} className="navbar-element pufi-rain">
                            <img className="pufi-rain-img" src={umbrellaIcon} alt="Puff"/>
                            <h2 className="pufi-rain-h2">PUFI RAIN</h2>
                        </li>
                        <div></div>
                        <li onClick={() => moveToSection("CART")} className="navbar-element pufi-cart">
                            <img className="pufi-cart-img" src={cartIcon} alt="Puff"/>
                            <h2 className="pufi-cart-h2">PUFI CART</h2>
                        </li>
                        <div></div>
                        <li onClick={() => moveToSection("NAP")} className="navbar-element pufi-nap">
                            <img className="pufi-nap-img" src={napIcon} alt="Puff"/>
                            <h2 className="pufi-nap-h2">PUFI NAP</h2>
                        </li>
                    </ul>
                </nav>
                <div>
                    <div className="cuenta-info-container">
                        <div className="mi-cuenta-info">
                            <p>MI CUENTA</p>
                            <img src={downArrow} alt="Expand arrow"/>
                        </div>
                        <div className="separator"></div>
                        <div className="mi-cuenta-info-compra">
                            <p className="mi-compra">MI COMPRA</p>
                        </div>
                    </div>
                </div>
            </header>
            {/* MIDDLE PAGE */}
            <div className="title-container">
                <p>ESTÁR CÓMODO, NUNCA FUE TAN FÁCIL.</p>
            </div>
            <div className="shop-button-container">
                <button onClick={() => moveToSection("RAIN")} className="shop-button">
                    <p>SHOP</p>
                </button>
            </div>
            <div className="circle-buttons-container">
                <div onClick={() => setCurrentBackground("first background")} className={`circle-button-selected ${currentBackground === "first background" && 'circle-button-currently-selected'}`}>
                    <button className="circle-button one"></button>
                </div>
                <div onClick={() => setCurrentBackground("second background")}  className={`circle-button-selected ${currentBackground === "second background" && 'circle-button-currently-selected'}`}>
                    <button className="circle-button one"></button>
                </div>
                <div onClick={() => setCurrentBackground("third background")}   className={`circle-button-selected ${currentBackground === "third background" && 'circle-button-currently-selected'}`}>
                    <button className="circle-button one"></button>
                </div>
            </div>
        </div>
    )
}

export { MainPage };