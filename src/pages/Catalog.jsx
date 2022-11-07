import React, { useState } from "react";
import data from "../assets/data.json";
import Card from "../components/Card";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";


export default () => {
    const [goods, setGoods] = useState(data);
    return <div className="wrapper">
        <Header products={data} update={setGoods}/>
        <div className="cards-container">
            {goods.map((d, i) => <Card 
            key={i}
            img={d.picture}
            text={d.name}
            price={d.price}
            />)}
        </div>
        <Footer/>
    </div>
}
