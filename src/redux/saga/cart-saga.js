import { takeLatest, put, all, call  } from 'redux-saga/effects';

import { clearCart } from "../action/cart-action";
import UserActionTypes from "../reducer/user/user-type";

export function* clearCartOnSignOut() {
    yield put(clearCart());
  }
  
  export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
  }
  
  export function* cartSagas() {
    yield all([call(onSignOutSuccess)]);
  }