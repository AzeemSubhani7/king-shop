import { cartActionTypes } from "./cartTypes";

export const toggleCartHideen = () => {
    return {
        type: cartActionTypes.TOGGLE_CART_HIDDEN
    }
};

export const addItem = (item) => {
    return {
        type: cartActionTypes.ADD_ITEM,
        payload: item
    }
}