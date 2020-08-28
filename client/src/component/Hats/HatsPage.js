import React from 'react';
import { Link } from "react-router-dom";

const HatsPage =(props)=>{
    return(
      <div> 
        <Link to={`${props.match.url}/0`}> Hats 0 </Link>
        <Link to={`${props.match.url}/1`}> Hats 1 </Link>
        <Link to={`${props.match.url}/2`}> Hats 2 </Link>
        <h1>Hats Page</h1>
      </div>
    )
}

export default HatsPage;