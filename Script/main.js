import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./card";
import Header from "./Header";
import Footer from "./footer";
import clothingOffers from "../ClothingDetails/clothing";
import BodyImage from "./images";


// Header
// Body 
// Footer

function App(){
    return (
        <div>
        <Header/>
        <div className="main">
            <BodyImage/>
            {
            clothingOffers.map((item,index)=>(
                 <Body key={index} source={item.image} cloth={item.cloth} offer={item.offer} shop={item.shop} value={item.price}/>
            ))}
        </div>
        <Footer/>
        </div>
    )
}

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>)

