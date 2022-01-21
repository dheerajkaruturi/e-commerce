import { Fragment, useContext } from "react";
import DataContext from "../../data";
import CartContext from "../store/CartContext";
import "./itemscategory.css";
import { Link } from "react-router-dom";

const Beverages = () => {
  const data = useContext(DataContext).filter(
    (items) => items.name === "BEVERAGES"
  );
  const cartCtxtConsumer = useContext(CartContext);
  const addtoCart = (item) => cartCtxtConsumer.addItem(item);
  return (
    <Fragment>
      <div className="card-display__container">
        {data.map((item) => (
          <div className="itemCard-wrapper">
            <Link to={`/item/${item.id}/itemdetails`}>
              <div className="img-holder">
                <img src={item.img} alt="item_display" />
              </div>
            </Link>
            <div className="itemTitle__placeholder">
              <p>{item.title}</p>
            </div>
            <div className="item__price">
              <p>Price: {item.price} ₹</p>
            </div>
            <div className="item__description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                inventore dolorem iste! Debitis, totam. Perferendis sed quis qui
                quisquam quaerat!
              </p>
            </div>
            <div className="button__container">
              <button
                className="button cart-button"
                onClick={() => addtoCart(item)}
              >
                Add to Cart
                <span>
                  <i className="ios ion-ios-cart"></i>
                </span>
              </button>
              <button className="button wishlist-button">
                To Wishlist{" "}
                <span>
                  <i className="ios ion-ios-heart"></i>
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Beverages;
