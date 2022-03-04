import { useReducer } from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props) => {
  //? initial state of the cart object.
  const initialCartState = {
    items: [],
    totalPrice: 0,
  };

  //? Reducer function which has both add and remove items functionality.

  const cartReducer = function (state, action) {
    //! to add items to cart
    if (action.type === "ADD_TO_CART") {
      const updatedTotalAmount = +state.totalPrice + +action.items.price;

      const updatedItems = state.items.concat(action.items);

      return {
        items: updatedItems,
        totalPrice: updatedTotalAmount,
      };
    }
    //! to remove items from cart
    else if (action.type === "REMOVE_FROM_CART") {
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
    //! increment selected item.
    else if (action.type === "Increment") {
      const currentStateItems = [...state.items];

      const updatedTotalAmount = +state.totalPrice + +action.item.price;

      const updatedcartItemsafterIncrement = currentStateItems.concat(
        action.item
      );
      return {
        items: updatedcartItemsafterIncrement,
        totalPrice: updatedTotalAmount,
      };
    }
    //! Decrement selected item.
    else if (action.type === "Decrement") {
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

  //? making use of useReducer hook.

  const [cartState, dispatchCartActions] = useReducer(
    cartReducer,
    initialCartState
  );

  //* methods containing dispatch actions.

  const addCartitemHandler = (items) => {
    dispatchCartActions({
      type: "ADD_TO_CART",
      items: items,
    });
  };

  const removeCartItemHandler = (id) => {
    dispatchCartActions({ type: "REMOVE_FROM_CART", id: id });
  };

  const incrementItemHandler = (item) => {
    dispatchCartActions({ type: "Increment", item: item });
  };

  const decrementItemHandler = (id) => {
    dispatchCartActions({ type: "Decrement", id: id });
  };
  //! cart context object that needs to be exported and used by the components that consumer the context provider data.

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addCartitemHandler,
    removeItem: removeCartItemHandler,
    increment: incrementItemHandler,
    decrement: decrementItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
