import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../App";
import { Heart, HeartFill } from "react-bootstrap-icons";
import "./style.css";
import { discountPrice } from "../../utils/utils";
import { getProductId, toggleProductLike } from "../../utils/catalog";

const Card = ({
  id,
  name,
  price,
  discount,
  wight,
  pictures,
  _id,
  likes = [],
}) => {
  const { api, setCart, user, setGoods, setData, setProducts, token } = useContext(Context);

  const productId = _id || id;
  const productPrice = Number(price) || 0;
  const productDiscount = Number(discount) || 0;
  const userId = user?._id;
  const [like, setLike] = useState(false);

  useEffect(() => {
    const isLiked = !!(userId && Array.isArray(likes) && likes.includes(userId));
    setLike(isLiked);
  }, [productId, likes, userId]);

  const patchCatalog = (nextLike) => {
    const updater = (prev) =>
      (Array.isArray(prev) ? prev : []).map((item) => {
        if (String(getProductId(item)) !== String(productId)) return item;
        return { ...item, likes: toggleProductLike(item, userId, nextLike) };
      });

    setGoods(updater);
    setData(updater);
    setProducts(updater);
  };

  const likeHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!userId || !productId) return;

    const nextLike = !like;
    setLike(nextLike);
    patchCatalog(nextLike);

    const isLocalToken = String(token || "").startsWith("local-token-");
    if (isLocalToken || !api?.setLike) return;

    api.setLike(productId, nextLike).catch(() => {});
  };

  const goToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const item = {
      _id: productId,
      id: productId,
      name,
      price: productPrice,
      discount: productDiscount,
      wight,
      pictures,
      quantity: 1,
    };

    setCart((prev) => {
      const exists = prev.some((el) => (el._id || el.id) === productId);
      if (exists) {
        return prev.map((el) =>
          (el._id || el.id) === productId
            ? { ...el, quantity: (Number(el.quantity) || 1) + 1 }
            : el
        );
      }
      return [...prev, item];
    });
  };

  const discount_price = discountPrice(productPrice, productDiscount);

  return (
    <Link to={`/product/${productId}`} className="card__link">
      <div className="card">
        {productDiscount > 0 && <span className="card__discount">-{productDiscount}%</span>}

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
          {productDiscount > 0 ? (
            <>
              <span className="card__old-price">{productPrice} ₽</span>
              <span className="card__price card__price_type_discount">
                {discount_price} ₽
              </span>
            </>
          ) : (
            <span className="card__price">{productPrice} ₽</span>
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
