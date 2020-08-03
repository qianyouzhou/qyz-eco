import React from 'react';
import {connect} from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../../asset/shopping-bag.svg';
import "./cart-icon.scss";
import { toggleCartHidden } from "../../../redux/action/cart-action";

const CartIcon = ({ toggleCartHidden,itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({cart:{cartItems}})=>({
    itemCount:cartItems.reduce(
            (acc,curr)=>acc+curr.quantity,0)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);
  
