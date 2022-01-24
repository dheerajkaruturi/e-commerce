import { Fragment, useContext, useState, useEffect } from "react";
import "./shoppingCart.css";
import emptyCart from '../../assets/empty_cart.png'

import CartContext from "../store/CartContext";

const ShoppingCart = () => {
  const [cartList, setcartList] = useState(false);
  const cartItemList = useContext(CartContext);
  const displayCart = cartItemList.items;
  const totalPriceofCartItems = cartItemList.totalPrice;

  //* makes the cart items render when there are items inside the context array:

  useEffect(() => {
    if (cartItemList.items.length !== 0) {
      setcartList(true);
    }
  }, [cartItemList]);

  //console.log(displayCart);

  //* ui response to when user selects to buy the cart items:

  const buyHandler = function () {
    alert(`Are you sure to make payment of Rs ${totalPriceofCartItems}?`);
  };

  //* remove cart item button functionality:

  const deleteHandler = (cartItem) => {
    console.log("deletehandler", cartItem);
    cartItemList.removeItem(cartItem);
  };

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
              <button
                className="btn btn-danger"
                onClick={() => deleteHandler(cartItem.id)}
              >
                <i className="ion ion-md-trash"></i>
              </button>
            </div>
          </div>
        ))}
        {/* render this bill part conditionally */}
        {cartList ? (
          <div className="bill_summary">
            <h4>Total Amount to be paid is : {totalPriceofCartItems} ₹</h4>
            {totalPriceofCartItems > 0 && (
              <button className="btn btn-success" onClick={buyHandler}>
                Make Payment
              </button>
            )}
          </div>
        ) : (
            <div className="no_cartItems">
              <img src={emptyCart} alt="Empty Cart" />
            <p>No items to show... 🤷🏼‍♂️</p>
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default ShoppingCart;
