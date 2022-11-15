import React from "react";
import Card from "../components/Card";

export default ({goods}) => {
    return <div className="cards-container">
        {goods.length > 0 ?
         goods.map((d, i) => <Card 
            key={i}
            img={d.pictures}
            text={d.name}
            price={d.price}
            id={d._id}
        />) : 
        <p style={{gridColumnEnd: "span 4", textAlign: "center"}}>Для отображения данных необходимо войти в приложение</p>
    }
    </div>
}
