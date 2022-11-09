import React from "react";
import Card from "../components/Card";

export default ({goods}) => {
    return <div className="cards-container">
        {goods.map((d, i) => <Card 
            key={i}
            img={d.pictures}
            text={d.name}
            price={d.price}
        />)}
    </div>
}
