import ShopActionTypes from './shop-type';

const INITIAL_STATE = {
    collections:null,
    isFetching:false,
    errorMessage:null
};

const  shopReducer = (state=INITIAL_STATE,action) => {
    switch (action.type){
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
              ...state,
              isFetching:true,
              collections:null,
              errorMessage:null
            };
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
              ...state,
              isFetching:false,
              collections: action.payload,
              errorMessage:null
            };
        case ShopActionTypes.FETCH_COLLECTIONS_FAIL:
            return {
              ...state,
              isFetching:false,
              collections:null,
              errorMessage:action.payload
            };
        default:
            return state;
    }
}

export default shopReducer;