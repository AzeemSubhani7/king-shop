import { cartActionTypes } from "./cartTypes";

export const toggleCartHideen = () => {
    return {
        type: cartActionTypes.TOGGLE_CART_HIDDEN
    }
};