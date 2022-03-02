import { Fragment, useContext } from "react";
import { WishlistContext } from "../store/WishListContext";
import CartContext from "../store/CartContext";
import styles from "./wishlist.module.css";

const WishlistItems = function () {
  //* tapping to cart context
  const cartCtx = useContext(CartContext);
  const addtCart = function (item) {
    cartCtx.addItem(item);
  };

  //* tapping to context
  const wishlistItemsctxt = useContext(WishlistContext);

  //* retrieving items array from the context value
  const wishlistItems = wishlistItemsctxt.items;

  //* remove item functionality
  const removeItem = function (item_id) {
    wishlistItemsctxt.removeItem(item_id);
  };
  return (
    <Fragment>
      <div className={styles.itemsinWishlist}>
        {wishlistItems.map((item) => {
          return (
            <div className={styles.itemContainer}>
              <div className={styles.itemImage}>
                <img src={item.img} alt="someItem" />
              </div>
              <div className={styles.itemDetail}>{item.description}</div>
              <div className={styles.button_container}>
                <button onClick={() => removeItem(item.id)}>
                  Remove from Wishlist
                </button>
                <button onClick={() => addtCart(item)}>Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default WishlistItems;
