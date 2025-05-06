

import card from "../CSS/card.css";
export default function Body(props){


    return (
        <div className="card">
            <img src={props.source} className="img"/>
            <div className="item">
                <p>{props.cloth}</p>
                <h3>{props.offer}</h3>
                <h3>{props.value}</h3>
                <button className="shop">{props.shop}</button>
            </div>
        </div>
    )
}