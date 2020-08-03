import CartActionTypes from "../reducer/cart/cart-type";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOOGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const clearItem = item =>({
  type:  CartActionTypes.CLEAR_ITEM,
  payload:  item
})

export const removeItem = item =>({
  type:  CartActionTypes.REMOVE_ITEM,
  payload:  item
})