import React,{useState} from "react"
import filter from "../CSS/filter.css"
import clothingOffers from "../ClothingDetails/clothing"
import main from "./main";
// import Header from "./Header";
export default function Filter()
{

    let [A,setA] = useState(clothingOffers);

    function sortdecreasing()
    {
          
    }

    function sortincreasing()
    {

    }

    function lessthan599()
    {

    }

    function above599()
    {
      const B  =  A.filter((value)=>value.price>599);
      setA(B);
      {
        A.map((item,index)=>(
             <Body key={index} source={item.image} cloth={item.cloth} offer={item.offer} shop={item.shop} value={item.price}/>
        ))}
    }




    return (

        <div>
            <select id="cars" name="cars">
                 <option value="">Filters</option>
                 <option onClick={sortdecreasing} value="saab">Price:Low To High</option>
                 <option onClick={sortincreasing} value="mercedes">Price:High To Low</option>
                 <option onClick={lessthan599} value="audi">Price:Less Than 599</option>
                 <option onClick={above599} value="audi">Price:Above 599</option>
             </select>
        </div>
    )
}