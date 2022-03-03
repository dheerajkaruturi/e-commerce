import React from "react";

const intialCartState = { 
  items: [], 
  totalPrice: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
};

const CartContext = React.createContext(intialCartState);

export default CartContext;
