import CartActionTypes from "./cart-type";
import {addItemToCart,removeItemFromCart} from "./cart-utils";

const INIITIAL_STATE={
    cartItems:[],
    hidden:true
}
const cartReducer = (state=INIITIAL_STATE, action) =>{
    switch(action.type){
        case CartActionTypes.TOOGLE_CART_HIDDEN:
            return {
                ...state,
                hidden:!state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            }
        case CartActionTypes.CLEAR_ITEM:
            return{
                ...state,
                cartItems:state.cartItems.filter(
                    cartItem =>cartItem.id!==action.payload.id
                )
            }
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems:removeItemFromCart(state.cartItems,action.payload)
            }
        case CartActionTypes.CLEAR_CART:
            return{
                ...state,
                cartItems:[]
            }
        default:
            return state
    }
}

export default cartReducer;