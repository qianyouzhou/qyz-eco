import React from 'react';
import { Link } from "react-router-dom";

const HatsDetail =(props)=>{
    console.log(props)
    return(
      <div> 
        <Link to="/hats"> To Hats </Link>
        <button onClick={()=>props.history.push("/hats")}> To Hats2 </button>
        <h1>Hats Detial:{props.match.params.hatid}</h1>
      </div>
    ) 
}

export default HatsDetail;

