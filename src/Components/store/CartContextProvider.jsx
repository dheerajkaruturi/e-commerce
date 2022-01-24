import { useReducer } from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props) => {
  const initialCartState = {
    items: [],
    totalPrice: 0,
  };

  const cartReducer = function (state, action) {
    if (action.type === "ADD_TO_CART") {
      const updatedCartItems = state.items.concat(action.items);
      const updatedTotalAmount = +state.totalPrice + +action.items.price;
      return {
        items: updatedCartItems,
        totalPrice: updatedTotalAmount,
      };
    } else if (action.type === "REMOVE_FROM_CART") {
      const currentStateItems = [...state.items];
      const foundIndex = currentStateItems
        .map((items) => items.id)
        .findIndex((requiredId) => requiredId === action.id);
      const [removedCartItem] = currentStateItems.splice(foundIndex, 1);
      const updatedPriceafterRemovinganItem =
        state.totalPrice - removedCartItem.price;

      return {
        items: [...currentStateItems],
        totalPrice: updatedPriceafterRemovinganItem,
      };
    }
    return initialCartState;
  };

  const [cartState, dispatchCartActions] = useReducer(
    cartReducer,
    initialCartState
  );

  let addCartitemHandler = (items) => {
    dispatchCartActions({ type: "ADD_TO_CART", items: items });
  };

  let removeCartItemHandler = (id) => {
    dispatchCartActions({ type: "REMOVE_FROM_CART", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addCartitemHandler,
    removeItem: removeCartItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
