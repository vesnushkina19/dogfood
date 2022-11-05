import React, {useState} from "react";
import Card from "../components/Card";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

import data from "../assets/data.json";

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
