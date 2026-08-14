import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../App";
import { Heart, HeartFill } from "react-bootstrap-icons";
import Local from "../../Local";
import "./style.css";
import { discountPrice } from "../../utils/utils";

const Card = ({
  name,
  price,
  discount,
  wight,
  pictures,
  _id,
  likes = [],
  setFav,
}) => {
  const { api } = useContext(Context);
  const navigate = useNavigate();

  const [like, setLike] = useState(false);

  useEffect(() => {
    const user = Local.getItem("user", true);
    const userId = user?._id;
    const isLiked = !!(userId && Array.isArray(likes) && likes.includes(userId));
    setLike(isLiked);
  }, [_id]); 

  const likeHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const nextLike = !like;
    setLike(nextLike); 

    // Если API недоступен — просто оставляем локально
    if (!api?.setLike) return;

    api.setLike(_id, nextLike)
      .then((data) => {
        if (!setFav) return;
        if (nextLike) {
          setFav((prev) => {
            const withoutDup = prev.filter((el) => el._id !== data._id);
            return [...withoutDup, data];
          });
        } else {
          setFav((prev) => prev.filter((el) => el._id !== _id));
        }
      })
      .catch(() => {
        
      });
  };
  const { setCart } = useContext(Context);
  const goToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
  
    const item = { _id, name, price, discount, wight, pictures };
  
    setCart((prev) => {
      const exists = prev.some((el) => el._id === _id);
      if (exists) return prev;
      return [...prev, item];
    });
  
    navigate("/cart");
  };

  const discount_price = discountPrice(discount, price);

  return (
    <Link to={`/product/${_id}`} className="card__link">
      <div className="card">
        {discount > 0 && <span className="card__discount">-{discount}%</span>}

        <button
          type="button"
          className="card__like"
          onClick={likeHandler}
          aria-label="Добавить в избранное"
        >
          {like ? <HeartFill color="red" size={22} /> : <Heart color="red" size={22} />}
        </button>

        <div className="card__image-wrap">
          <img
            className="card__img"
            src={pictures}
            alt={name}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://via.placeholder.com/400x300?text=No+Image";
            }}
          />
        </div>

        <div className="card__desc">
          {discount > 0 ? (
            <>
              <span className="card__old-price">{price} ₽</span>
              <span className="card__price card__price_type_discount">
                {discount_price} ₽
              </span>
            </>
          ) : (
            <span className="card__price">{price} ₽</span>
          )}

          <span className="card__wight">{wight}</span>
          <p className={name?.length > 30 ? "card__name-small" : "card__name"}>{name}</p>
        </div>

        <button className="btnCart" type="button" onClick={goToCart}>
          В корзину
        </button>
      </div>
    </Link>
  );
};

export default Card;