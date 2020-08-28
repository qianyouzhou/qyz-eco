import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
//import thunk from 'redux-thunk';

import rootSaga from "../saga/root-saga";
import rootReducer from "../reducer/root-reducer";

//const middlewares=[thunk];
const sagaMiddleware=createSagaMiddleware();
const middlewares=[sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
