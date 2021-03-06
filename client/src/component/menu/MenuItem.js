import React from "react";
import { withRouter } from "react-router-dom";

import './menuitem.scss';

const MenuItem = ({title, imageUrl, linkUrl, history, match})=>{
    return(
        <div 
            className="menu-item"
            onClick={()=>history.push(`${match.url}${linkUrl}`)}
        >
            <div 
                className="menu-background-image"
                style={{backgroundImage:`url(${imageUrl})`}}
            />
            <div className="menu-content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <div className="subtitle">SHOP NOW</div>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);