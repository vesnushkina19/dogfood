import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../App";
import { Heart, HeartFill } from "react-bootstrap-icons";
import Local from "../../Local";
import "./style.css";
import { discountPrice } from "../../utils/utils";

const Card = ({ name, price, discount, wight, pictures, _id, likes, setFav }) => {
  const { api } = useContext(Context);
  const [like, setLike] = useState(false);

  useEffect(() => {
    let id = Local.getItem("user", true)._id;
    if (likes.includes(id)) {
      setLike(true);
    }
  }, []);

  const likeHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setLike(!like);
    api
      .setLike(_id, !like)
      .then((res) => res.json())
      .then((data) => {
        if (!like) {
          setFav((prev) => {
            return [...prev, data];
          });
        } else {
          setFav((prev) => prev.filter((el) => el._id !== _id));
        }
      });
  };

  const discount_price = discountPrice(discount, price);

  return (
    <Link to={`/product/${_id}`}>
      <div className="card">
        
          {discount !== 0 && (
            <span className="card__sticky card__discount">{`-${discount}% `}</span>
          )}
          <span className="card__sticky card__like" onClick={likeHandler}>
            {like ? (
              <HeartFill style={{ color: "red" }} />
            ) : (
              <Heart style={{ color: "red" }} />
            )}
          </span>
     

        <img className="card__img" src={pictures}/>
        <div className="card__desc">
            <span className={discount !== 0 ? "card__old-price" : "card__price" }>
              {price}&nbsp;₽
              </span>
            {discount !==0 && <span className="card__price card__price_type_discount">
              {discount_price}&nbsp;₽
              </span>}
            <span className="card__wight">{wight}</span>
            <p className={name.length > 30 ? "card__name-small" :"card__name"}>{name}</p>
          </div>
        <Link to="/cart">
          <button className="btnCart">В корзину</button>
        </Link>
      </div>
    </Link>
  );
};

export default Card;
