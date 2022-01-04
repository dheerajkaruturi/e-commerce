import { Fragment, useState } from "react";
import "./shoppingCart.css";
import Cart from "../Cart/cart";

const ShoppingCart = () => {
  const [addItem, setaddItem] = useState(0);

  const addtoCartHandler = function () {
    setaddItem((counter) => counter + 1);
  };
  const removefromCartHandler = function () {
    addItem === 0 ? setaddItem(addItem) : setaddItem((counter) => counter - 1);
  };
  return (
    <Fragment>
      <section className="cart-section p-3">
        <h3>
          Shopping Cart <i className="icon ion-md-cart"></i>
        </h3>
        <Cart
          addtoCartHandler={addtoCartHandler}
          addItem={addItem}
          removefromCartHandler={removefromCartHandler}
        />
        <div className="bill_summary">
          <h4>Total Amount : 6000 ₹</h4>
        
        </div>
      </section>
    </Fragment>
  );
};

export default ShoppingCart;
