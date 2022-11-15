import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

const Card = ({text, price, img, id}) => {
    const imgStyle = {
        backgroundImage: `url(${img})`
    };
    return (
        <Link to={`/product/${id}`}>
            <div className="card">
                <div className="card_img" style={imgStyle}></div>
                <div className="card_price">{price}₽</div>
                <div className="card_text">{text}</div>
                <button className="btn">В корзину</button>
            </div>
        </Link>
    )
}

export default Card;
