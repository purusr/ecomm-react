import Useapi from "./Useapi";

function Test(){
    // const{data, error, loading} = Useapi('https://fakestoreapi.com/products/1');
    // if(loading) return <h3>Loading......</h3>;
  
    // if (error) return <h3>We know something went wrong, we are taking care of that.</h3>
    // console.log (data);
    //  data.map((originapi)=>{
    //    console.log(originapi.title);
     return (
      <h1>I am Test</h1>
     )

    //  })
    }
     export default Test;




     
// let Fetchdata = fetch(
//   "https://fakestoreapi.com/products/")
    
//           // fetchRes is the promise to resolve
//           // it by using.then() method
//           .then(res =>
//               res.json()).then(d =>{
//                console.log(d);
//               d.map((original)=>{

//                 return (
//                   <Card
//                       image={original.image}
//                       title={original.title}
//                       price={original.price}   
                      
//                       />
//                 )
//               })
              
              
//               }).catch((err)=>{
//                  console.log(err);


//                 })  