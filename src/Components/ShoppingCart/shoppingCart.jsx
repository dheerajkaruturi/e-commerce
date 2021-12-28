import { Fragment, useState } from "react";
import "./shoppingCart.css";
import shoe from "../../assets/nike-shoe.jpg";

const ShoppingCart = () => {
  const [count, setCount] = useState(0);

  const addtoCartHandler = function () {
    setCount((counter) => counter + 1);
  };
  const removefromCartHandler = function () {
    if (count === 0) {
        setCount(count);
        return
    } else {
        setCount((counter) => counter - 1)
    }
  };
  return (
    <Fragment>
      <section className="cart-section p-3">
        <h3>
          Shopping Cart <i className="icon ion-md-cart"></i>
        </h3>
        <div className="cart-item_details">
          <div className="item_img">
            <img src={shoe} alt="shoe" />
          </div>
          <div className="item_title">
            <p>Nike Shoe</p>
          </div>
          <div className="item_cost">
            <p>2000 ₹</p>
          </div>
          <div className="item_edit">
            <button onClick={addtoCartHandler}>+1</button>
            <input value={count} disabled />
            <button onClick={removefromCartHandler}>-1</button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ShoppingCart;
