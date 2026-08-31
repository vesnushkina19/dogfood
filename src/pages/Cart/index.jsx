import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Dash, Plus, Trash } from "react-bootstrap-icons";
import { Context } from "../../App";
import { discountPrice } from "../../utils/utils";
import "./style.css";

const getProductId = (item) => item._id || item.id;
const getQuantity = (item) => Number(item.quantity) || 1;
const formatPrice = (value) => `${value.toLocaleString("ru-RU")} ₽`;

const Cart = () => {
  const { cart = [], setCart } = useContext(Context);

  const cartCount = cart.reduce((total, item) => total + getQuantity(item), 0);
  const totalPrice = cart.reduce((total, item) => {
    const price = Number(item.price) || 0;
    const discount = Number(item.discount) || 0;
    return total + discountPrice(price, discount) * getQuantity(item);
  }, 0);

  const changeQuantity = (id, step) => {
    setCart((prev) =>
      prev.map((item) => {
        if (getProductId(item) !== id) return item;

        return {
          ...item,
          quantity: Math.max(1, getQuantity(item) + step),
        };
      })
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => getProductId(item) !== id));
  };

  return (
    <section className="cart-page">
      <h2 className="cart-page__title">Корзина</h2>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Корзина пока пустая</p>
          <Link className="cart-empty__link" to="/catalog">
            Перейти в каталог
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-list">
            {cart.map((item) => {
              const itemId = getProductId(item);
              const quantity = getQuantity(item);
              const price = Number(item.price) || 0;
              const discount = Number(item.discount) || 0;
              const currentPrice = discountPrice(price, discount);
              const itemTotal = currentPrice * quantity;

              return (
                <article className="cart-card" key={itemId}>
                  <Link to={`/product/${itemId}`} className="cart-card__image-link">
                    <img
                      className="cart-card__img"
                      src={item.pictures}
                      alt={item.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://via.placeholder.com/200x160?text=No+Image";
                      }}
                    />
                  </Link>

                  <div className="cart-card__info">
                    <Link to={`/product/${itemId}`} className="cart-card__name">
                      {item.name}
                    </Link>
                    <span className="cart-card__wight">{item.wight || item.weight}</span>

                    <div className="cart-card__prices">
                      {discount > 0 && (
                        <span className="cart-card__old-price">{formatPrice(price)}</span>
                      )}
                      <span className={discount > 0 ? "cart-card__price cart-card__price_discount" : "cart-card__price"}>
                        {formatPrice(currentPrice)}
                      </span>
                    </div>
                  </div>

                  <div className="cart-card__controls">
                    <div className="cart-card__quantity">
                      <button
                        type="button"
                        className="cart-card__qty-btn"
                        onClick={() => changeQuantity(itemId, -1)}
                        disabled={quantity <= 1}
                        aria-label="Уменьшить количество"
                      >
                        <Dash />
                      </button>
                      <span className="cart-card__qty-value">{quantity}</span>
                      <button
                        type="button"
                        className="cart-card__qty-btn"
                        onClick={() => changeQuantity(itemId, 1)}
                        aria-label="Увеличить количество"
                      >
                        <Plus />
                      </button>
                    </div>

                    <strong className="cart-card__total">{formatPrice(itemTotal)}</strong>

                    <button
                      type="button"
                      className="cart-card__remove"
                      onClick={() => removeItem(itemId)}
                      aria-label="Удалить товар"
                    >
                      <Trash />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="cart-summary">
            <h3 className="cart-summary__title">Итого</h3>
            <div className="cart-summary__row">
              <span>Товары</span>
              <span>{cartCount}</span>
            </div>
            <div className="cart-summary__row cart-summary__row_total">
              <span>Общая сумма</span>
              <strong>{formatPrice(totalPrice)}</strong>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
};

export default Cart;
