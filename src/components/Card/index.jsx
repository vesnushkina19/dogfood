import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Heart, HeartFill} from "react-bootstrap-icons";
import Local from "../../Local";
import "./style.css";


const Card = ({name, price, pictures, _id, likes, api, setFav}) => {
    const [like, setLike] = useState(false);
    const imgStyle = {
        backgroundImage: `url(${pictures})`
    };
useEffect(() => {
    let id = Local.getItem("user", true)._id;
    if (likes.includes(id)) {
        setLike(true)
    }
}, [])

    const likeHandler = e => {
        e.stopPropagation();
        e.preventDefault();
        setLike(!like)
        api.setLike(_id, !like)
            .then(res => res.json())
            .then(data => {
                if (!like) {
                    setFav(prev => {return [...prev, data]})
                } else {
                    setFav(prev => prev.filter(el => el._id !== _id))
                    }
                })
        }
                
    return (
        <Link to={`/product/${_id}`}>
            <div className="card">
            <span className="card__like" 
                onClick={likeHandler}>
                    {like ? <HeartFill style={{color:"red"}}/> : <Heart style={{color:"red"}}/> }
                </span>
                <div className="card_img" style={imgStyle}></div>
                <div className="card_price">{price}₽</div>
                <div className="card_text">{name}</div>
                <Link to="">
                    <button className="btnCart">В корзину</button>
                </Link>
                
            </div>
        </Link>
    )
}

export default Card;
