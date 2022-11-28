function Card({key,image,price,title}){
  console.log('I am from function card')
  console.log();
 

  return ( 
    <>    
       <div className="product-card">  
       <img className='product-image' src={image}></img>
       <h4>{title}</h4>
       <p>Price: ${price}</p>
       <button>Buy Now</button>
       </div> 
    </>
    
    
    )

}

export default Card;