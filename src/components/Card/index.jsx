import React from "react";
import "./style.css";

const Card = ({text, price, img}) => {
    const imgStyle = {
        backgroundImage: `url(${img})`
    };
    return (
        <div className="card">
            <div className="card_img" style={imgStyle}></div>
            <div className="card_price">{price}₽</div>
            <div className="card_text">{text}</div>
            <button className="btn">В корзину</button>
        </div>
    )
}

export default Card;
