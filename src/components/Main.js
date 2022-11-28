import Image from "../Banner.jfif";
import Cards from "./Cards";
import Card from "./Card";
import Useapi from "./Useapi";
import React from "react";

function Main(){

 const [starData, setStarData] = React.useState([{}])
 const [count, setCount] = React.useState(1)
  
  React.useEffect(function() {
      console.log("Effect ran");
      fetch('https://fakestoreapi.com/products/')
          .then(res => res.json())
          .then(data => setStarData(data))
  }, [count])
  console.log('I am from main');
  console.log(starData);
 
  console.log(count);
    return (
      <div onLoad={()=> setCount(beforeCount=> beforeCount+1)} className="bdy">
      <div  className='banner'>
        <img src={Image}></img>  
        </div>
          <Cards
       data={starData}
       />
      </div>
    
  
    )

}
  export default Main;








  // return(
  //   <>
  //   <h1>hi{data.title}</h1>
  //   <Card
  //   //  image={data.image}
  //   //  title={data.title}
  //    price={data.price}   
    
  //   />
  //   </>
    
  // )