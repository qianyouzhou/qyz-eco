import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from "../../form-input/custom-button";
import CartItem from "../cart-item/cart-item"
import "./cart-dropdown.scss";

const CartDropDown = ({cartItems,history})=>{
    return(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length?(
                cartItems.map((cartItem)=>
                <CartItem 
                    key={cartItem.id}
                    item={cartItem} />
                ))
                :(<span>Your cart is empty</span>)

            }
        </div>
        <CustomButton onClick={()=>history.push("/checkout")}>GO TO CHECKOUT</CustomButton>
    </div>
    )
}

const  mapStateToProps = ({cart:{cartItems}}) =>({
    cartItems
  })
export default withRouter(connect(mapStateToProps,{ forwardRef: true })(CartDropDown));