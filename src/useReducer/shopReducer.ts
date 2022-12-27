import { ShopAction, ShopActionType } from "./action";
import { ShopState } from "./states";

export const shopReducer = (state: ShopState, action: ShopAction) => {
    switch (action.type){
        case ShopActionType.ADD_ITEM:
            return {
                ...state,
                items: action.payload
            }
        case ShopActionType.REMOVE_ITEM:
            return {
                ...state,
                items: action.payload
            }
        case ShopActionType.UPDATE_TOTAL:
            return {
                ...state,
                total: action.payload
            }
        case ShopActionType.UPDATE_QUANTITY:
            return {
                ...state,
                items: action.payload
            }
        case ShopActionType.EMPTY:
            return {
                items: [],
                total: 0,
                handlePlaceOrder: null,
                checkOutList: null,
                handleCheckOutButton: null,
                updateCartQuantity: null,
                addItemToCart: null,
                removeItemFromCart: null,
            }
        default: 
            return state
    }
}