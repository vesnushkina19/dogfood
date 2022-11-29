import React, {useContext} from "react";
import Card from "../components/Card";
import {Context} from "../App";

export default ({ setFav}) => {
    const {searchText, goods, products} = useContext(Context);
    return <div className="cards-container">
        {!searchText && goods.length > 0 &&
         goods.map((d, i) => <Card 
            key={i}
            {...d}
            setFav={setFav}
        />) 
    } 
    {searchText && <div style={{gridColumnEnd: "span 4"}}>
        {products.length
        ? <>По запросу <b>{searchText}</b> найдено {products.length} позиций</>
        : <>По запросу <b>{searchText}</b> товаров не найдено</>
        }
    </div>}
    {searchText && products.map((d, i) => <Card 
            key={i}
            {...d}
            setFav={setFav}
        />)}
    </div>
}
