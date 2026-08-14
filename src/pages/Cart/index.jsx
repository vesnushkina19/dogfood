import React, { useContext } from "react";
import { Context } from "../../App";

const Cart = () => {
  const { cart = [] } = useContext(Context);

  return (
    <div className="container py-4">
      <h2>Корзина</h2>
      {cart.length === 0 ? (
        <p>Корзина пока пустая</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item._id}>
              {item.name} — {item.price} ₽
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;