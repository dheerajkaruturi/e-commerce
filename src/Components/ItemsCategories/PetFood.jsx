import { Fragment, useContext } from "react";
import DataContext from "../../data";
import "./itemscategory.css";
import { Link } from "react-router-dom";
import CartContext from "../store/CartContext";
import { WishlistContext } from "../store/WishListContext";

const PetFood = () => {
  const data = useContext(DataContext).filter(
    (items) => items.name === "PET_FOOD"
  );

  //? tapping to cart context
  const cartCtxtConsumer = useContext(CartContext);
  const addtoCart = (item) => cartCtxtConsumer.addItem(item);

  //? tapping to wishlist context
  const wishlistCtx = useContext(WishlistContext);
  const addtoWishlist = function (item) {
    wishlistCtx.addItem(item);
  };

  //? to get items count:
  const getCartitemsCount = function (item_id) {
    return cartCtxtConsumer.items.filter((item) => item.id === item_id).length;
  };
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
                style={{
                  position: "relative",
                }}
              >
                Add to Cart
                <span>
                  <i className="ios ion-ios-cart"></i>{" "}
                  {getCartitemsCount(item.id) > 0 && (
                    <span className="count_badge">
                      {getCartitemsCount(item.id)}
                    </span>
                  )}
                </span>
              </button>
              <button
                className="button wishlist-button"
                onClick={() => addtoWishlist(item)}
              >
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
export default PetFood;
