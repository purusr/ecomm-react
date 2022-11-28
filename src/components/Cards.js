import camera from "../images/Jean.jpg"
import Useapi from "./Useapi";
import Card from "./Card";


const Cards= ({data})=>{
console.log("Cardsssss");
console.log(data);

  return (
    <>
     {
        data.map(crd => <Card key={crd.id} image={crd.image} price={crd.price} title={crd.title}/>)
      }
      
    </>
  )
}


  // console.log('I am from Cards');
  // console.log(props);
    
  //  return ( 
  //     <>
  //     <p>{props.name}</p>
  //    <Card key = {props.birth_year} props={props}/>
  //     </>
      
  //     )
   
 
    // return(
    //   <>
    //   <div className="product-card">  
    //   <img className='product-image'src=''></img>
    //   <h4></h4>
    //   <p>Price:$</p>
    //   <button>Buy Now</button>
    //   </div> 
    //   </>
        
            

    // )


export default Cards;