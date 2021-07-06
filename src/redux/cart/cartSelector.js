import { createSelector } from 'reselect';

const selectCart = state => state.cart;

// const mapStateToProps = ({ cart: {cartItems} }) => {
//     return {
//         cartItems
//     }
// }
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
  );

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
      cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
          accumalatedQuantity + cartItem.quantity,
        0
      )
  );