import { useState, useContext } from "react";
import "./shoppingCart.css";
import CartContext from "../store/CartContext";

const InputQuantites = function (props) {
  const cartCtx = useContext(CartContext);

  const [qty, setQty] = useState(0);

  function cartItemAddHandler() {}

  function cartItemRemoveHandler() {}
  return (
    <form className="formDetails">
      <button>+</button>
      <input value={qty} />
      <button>-</button>
    </form>
  );
};

export default InputQuantites;
