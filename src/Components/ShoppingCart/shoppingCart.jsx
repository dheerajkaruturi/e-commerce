import { Fragment, useContext, useState, useEffect } from "react";
import "./shoppingCart.css";

import CartContext from "../store/CartContext";

const ShoppingCart = () => {
  const [cartList, setcartList] = useState(false);
  const cartItemList = useContext(CartContext);
  const displayCart = cartItemList.items;

  useEffect(() => {
    if (cartItemList.items.length !== 0) {
      setcartList(true);
    }
  }, [cartItemList]);

  console.log(displayCart);
  return (
    <Fragment>
      <section className="cart-section">
        <h3>
          Shopping Cart <i className="icon ion-md-cart"></i>
        </h3>
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: "bold",
            marginTop: "0.5rem",
          }}
        >
          There are {`${displayCart.length}`} items in your cart.
        </p>
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
        {cartList ? (
          <div className="bill_summary">
            <h4>Total Amount : 6000 ₹</h4>
          </div>
        ) : (
          <div className="no_cartItems">
            <p>No items to show... 🤷🏼‍♂️</p>
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default ShoppingCart;
