import React from 'react';
import { connect } from 'react-redux';

import {clearItem, addItem, removeItem} from "../../redux/action/cart-action";
import "./checkout-item.scss";

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const { imageUrl, price, name, quantity }=cartItem
    return(
        <div className="checkout-item">
                <img src={imageUrl} alt="item-image" className="image"/>
                <span className="name">{name}</span>
                <span className="quantity">
                    <span className="arrow" onClick={()=>removeItem(cartItem)}>&#10094;</span>
                    {quantity}
                    <span className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</span>
                </span>
                <span className="price">{price}</span>
                <span className="remove-button" onClick={()=>clearItem(cartItem)}>&#10005;</span>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    clearItem:(item)=>dispatch(clearItem(item)),
    addItem:(item)=>dispatch(addItem(item)),
    removeItem:(item)=>dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);