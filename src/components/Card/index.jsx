import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../App";
import { Heart, HeartFill } from "react-bootstrap-icons";
import Local from "../../Local";
import "./style.css";

const Card = ({ name, price, discount, pictures, _id, likes, setFav }) => {
  const { api } = useContext(Context);
  const [like, setLike] = useState(false);
  const imgStyle = {
    backgroundImage: `url(${pictures})`,
  };
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

  return (
    <Link to={`/product/${_id}`}>
      <div className="card">
        <span className="header__card">
          {discount !== 0 && (
            <span className="card__discount">{`-${discount}% `}</span>
          )}
          <span className="card__like" onClick={likeHandler}>
            {like ? (
              <HeartFill style={{ color: "red" }} />
            ) : (
              <Heart style={{ color: "red" }} />
            )}
          </span>
        </span>

        <span className="card_img" style={imgStyle}></span>
        <span className="card_price">{price}₽</span>

        <span className="card_text">{name}</span>
        <Link to="/cart">
          <button className="btnCart">В корзину</button>
        </Link>
      </div>
    </Link>
  );
};

export default Card;
