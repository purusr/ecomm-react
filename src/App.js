import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Cards from './components/Cards';
import Useapi from './components/Useapi';
import Test from './components/Test';
import Card from './components/Card';

function App() {      
  // const [starWarsData, setStarWarsData] = React.useState({})
  
  // React.useEffect(function() {
  //     console.log("Effect ran")
  //     fetch("http://localhost:5000/products")
  //         .then(res => res.json())
  //         .then(data => setStarWarsData(data))
  // }, [])
  // console.log('I am from main');
  // console.log(starWarsData.title);
  // console.log(starWarsData.image);


  return (
    <BrowserRouter>
        <Header/>
        <Main />
        <Footer/>
     </BrowserRouter>
  )



}

export default App;
