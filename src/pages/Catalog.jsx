import React, { useContext } from "react";
import Card from "../components/Card";
import { Context } from "../App";

const Catalog = ({ setFav }) => {
  const { searchText, goods, products } = useContext(Context);

  const safeGoods = Array.isArray(goods) ? goods : [];
  const safeProducts = Array.isArray(products) ? products : [];
  const hasSearch = Boolean(searchText && searchText.trim());

  return (
    <div className="cards-container">
      {!hasSearch &&
        safeGoods.length > 0 &&
        safeGoods.map((d) => (
          <Card key={d._id || d.id} {...d} setFav={setFav} />
        ))}

      {hasSearch && (
        <div style={{ gridColumnEnd: "span 4" }}>
          {safeProducts.length ? (
            <>
              По запросу <b>{searchText}</b> найдено {safeProducts.length} позиций
            </>
          ) : (
            <>
              По запросу <b>{searchText}</b> товаров не найдено
            </>
          )}
        </div>
      )}

      {hasSearch &&
        safeProducts.map((d) => (
          <Card key={d._id || d.id} {...d} setFav={setFav} />
        ))}
    </div>
  );
};

export default Catalog;