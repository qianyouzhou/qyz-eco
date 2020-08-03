import React from 'react';
import {connect} from 'react-redux';

import "./collectionitem.scss";
import CustomButtom from "../form-input/custom-button";
import {addItem} from "../../redux/action/cart-action";

const CollectionItem=({item,addItem})=>{
    const {id,name,imageUrl,price}=item
    return(
            <div className="collection-item">
                <div 
                    className="background-image"
                    style={{backgroundImage:`url(${imageUrl})`}}
                />
                <CustomButtom 
                    className="content" 
                    onClick={()=>addItem(item)}
                >
                    ADD TO CART
                </CustomButtom>
                <div className="detail">
                    <div>{name}</div>
                    <div>{`$${price}`}</div>
                </div>
            </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem:(item)=>dispatch(addItem(item))
});

export default connect(null,mapDispatchToProps)(CollectionItem);