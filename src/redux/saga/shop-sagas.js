import { takeLatest, call, put } from 'redux-saga/effects';

import {fetchCollectionsSuccess, fetchCollectionsFail } from "../action/shop-action";
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import ShopActionTypes from "../reducer/shop/shop-type";

export function* fetchCollectionsAsync(){
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot=yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap,snapshot);
        console.log("2");
        console.log(collectionsMap);
        console.log("2");
        yield put(fetchCollectionsSuccess(collectionsMap))
    }catch(error){
        yield put(fetchCollectionsFail(error.message))
    }
}

export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionsAsync);
}

//知识点：
/*take:
比如 yield take("increment"),后面就不能加其他的generator，
不过可以在前面加const incrementPayload=yield take("increment")获得action payload
yield take 后面的语句都是yield take执行完之后才开始执行的，并且只执行一次

take和takeEvery的不同
takeEvery第二个参数是generator,没运行一次都产生一个新的generator
可以用while(true){
    yield take('increment')
}
模拟 yield takeEvery('increment'),但是takeEvery里面的东西是异步的，即前面的是不会阻塞的,因为每次都是新的generator，但take会 
还有takeLatest,takeLastest也会每次产生新的generator,但是delay()之后的代码只会在最后一个generator里面被触发,前面的generator都被取消了

另外saga的generator里面可以设置payload
*/