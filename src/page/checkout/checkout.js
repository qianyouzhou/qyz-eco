import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import  CheckoutItem from "../../component/checkout-item/checkout-item";
import StripeCheckoutButton from "../../component/stripe-button/stripe-button";
import { selectCartTotal,selectCartItems } from "../../redux/reducer/cart/cart-selectors";

import "./checkout.scss";

const CheckoutPage =({cartItems,totalPrice})=>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        <div className="checkout-items">
            {
                cartItems.map((cartItem)=>(
                    <CheckoutItem 
                        key={cartItem.id}
                        cartItem={cartItem} 
                    />
                ))
            }
        </div>
        <div className="checkout-totalamount">
            Total:{totalPrice}
        </div>
        <StripeCheckoutButton price={totalPrice} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    totalPrice:selectCartTotal,
    cartItems:selectCartItems
})

export default connect(mapStateToProps)(CheckoutPage);