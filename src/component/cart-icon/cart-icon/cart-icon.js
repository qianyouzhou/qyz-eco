import React from 'react';
import {connect} from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../../asset/shopping-bag.svg';
import "./cart-icon.scss";
import { toggleCartHidden } from "../../../redux/action/cart-action";
import { selectCartItemsCount } from "../../../redux/reducer/cart/cart-selectors";

const CartIcon = ({ toggleCartHidden,itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state)=>{
    console.log(state);
    return{
    itemCount:selectCartItemsCount(state)}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);
  
