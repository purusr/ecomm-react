import React,{useEffect, useState} from "react";
import axios from 'axios';

function Useapi(url){

    const[error, setError]= useState(null);
    const[data, setData]= useState(null);
    const[loading, setLoading]=useState(false);

useEffect(()=>{
axios.get(url).then( (response)=>{
    setData(response.data);
}).catch((err)=>{
    setError(err)
}).finally(()=>{
    setLoading(false);
});
},[url]);

return{data,error,loading};
}



export default Useapi;

