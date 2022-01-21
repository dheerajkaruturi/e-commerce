import { Fragment, useContext } from "react";
import "./shoppingCart.css";

import CartContext from "../store/CartContext";

const ShoppingCart = () => {
  const cartItemList = useContext(CartContext);
  const displayCart = cartItemList.items;
  console.log(displayCart)
  return (
    <Fragment>
      <section className="cart-section">
        <h3>
          Shopping Cart <i className="icon ion-md-cart"></i>
        </h3>
        {displayCart.map((cartItem) => (
          <div className="cartitemsList-container">
            <div className="item_img">
              <img src={cartItem.img} alt="item_display" />
            </div>
            <div className="item_title">
              <p>{cartItem.title}</p>
            </div>
            <div className="item_price">
              <p>{cartItem.price} ₹</p>
            </div>
            <div className="remove_button">
              <button className="btn btn-danger">Remove</button>
            </div>
          </div>
        ))}
        {/* render this bill part conditionally */}
        {/* <div className="bill_summary">
          <h4>Total Amount : 6000 ₹</h4>
        </div> */}
      </section>
    </Fragment>
  );
};

export default ShoppingCart;
