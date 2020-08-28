import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';


import CustomButton from "../../form-input/custom-button";
import CartItem from "../cart-item/cart-item"
import { toggleCartHidden } from "../../../redux/action/cart-action";
import { selectCartItems } from "../../../redux/reducer/cart/cart-selectors";
import "./cart-dropdown.scss";

const CartDropDown = ({cartItems,history,dispatch})=>{
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
        <CustomButton onClick={
            ()=>{
                history.push("/checkout")
                dispatch(toggleCartHidden())
            }
        }>GO TO CHECKOUT</CustomButton>
    </div>
    )
}

const  mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems

})

export default withRouter(connect(mapStateToProps)(CartDropDown));