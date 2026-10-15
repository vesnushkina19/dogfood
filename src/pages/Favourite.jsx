import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { Context } from "../App";

const Favourite = () => {
  const { fav = [] } = useContext(Context);
  const items = Array.isArray(fav) ? fav : [];

  return (
    <section className="cart-page">
      <h2 className="cart-page__title">Избранное</h2>
      {items.length === 0 ? (
        <div className="cart-empty">
          <p>Пока нет избранных товаров</p>
          <Link className="cart-empty__link" to="/catalog">
            Перейти в каталог
          </Link>
        </div>
      ) : (
        <div className="cards-container" style={{ margin: 0, width: "100%", padding: 0 }}>
          {items.map((item) => (
            <Card key={item._id || item.id} {...item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Favourite;
