import { takeLatest, put, all, call  } from 'redux-saga/effects';

import { clearCart } from "../action/cart-action";
import UserActionTypes from "../reducer/user/user-type";

export function* clearCartOnSignOut() {
    yield put(clearCart());
  }
  
export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
  }
/*
export function* onCartItemChange() {
  yield takeLatest(CartActionTypes.ADD_ITEM,);
  yield takeLatest(CartActionTypes.CLEAR_ITEM,);
  yield takeLatest(CartActionTypes.REMOVE_ITEM,);
  yield takeLatest(CartActionTypes.CLEAR_CART,);
}
*/
export function* cartSagas() {
    yield all([call(onSignOutSuccess)]);
  }