import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shop-sagas";
import userSaga from "./user-sagas";
import { cartSagas } from "./cart-saga";

export default function* rootSaga (){
    yield all([
        call(fetchCollectionsStart),
        call(userSaga),
        call(cartSagas)
    ])
}
