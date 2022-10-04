import React from "react";
import './CategoryInformation.css';
import rightArrow from '../../Assets/right-arrow.svg'

function CategoryInformation({figure,title,buttonText,reversed,reference}){
    return(
        <div ref={reference} className={`category-information-container ${reversed && 'category-information-reversed'}`}>
            {(title === "Pufi RAIN") && 
            <div className="section-background-container">
                <div className="section-background background-one">
                    <button className="shop-button-item">
                        <p>SHOP</p>
                    </button>
                </div>
            </div>}
            {(title === "Pufi PUFF") && 
            <div className="section-background-container">
                <div className="section-background background-two">
                    <button className="shop-button-item">
                        <p>SHOP</p>
                    </button>
                </div>
            </div>}
            {(title === "Pufi CART") && 
            <div className="section-background-container">
                <div className="section-background background-three">
                    <button className="shop-button-item">
                        <p>SHOP</p>
                    </button>
                </div>
            </div>}
            {(title === "Pufi NAP") && 
            <div className="section-background-container">
                <div className="section-background background-four">
                    <button className="shop-button-item">
                        <p>SHOP</p>
                    </button>
                </div>
            </div>}

            <div className="square-figure"></div>
            <div className="section-item-container">
                <section className="item-information-container">
                    <figure className="item-image">
                        <img src={figure} alt="Pufi item"/>
                    </figure>
                    <div className="item-title">
                        <h3>{title}</h3>
                    </div>
                    <div className="separator-item"></div>
                    <div className="item-description">
                        <p>Descripción del producto. Este es un texto simulado</p>
                    </div>
                    <div className="show-more-link">
                        <img src={rightArrow} alt="Right arrow"/>
                        <a href="/">{buttonText}</a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export { CategoryInformation };