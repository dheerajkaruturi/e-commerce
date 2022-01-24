import classes from "./productdetail.module.css";
import { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../../data";
import CartContext from "../store/CartContext";

const ProductDetail = () => {
  // getting the params and using them to retrieve the data from context
  const params = useParams();
  console.log(params);

  const foundId = useContext(DataContext).filter(
    (itemId) => itemId.id === +params.itemId
  );

  const cartCtxtConsumer = useContext(CartContext);
  const addtoCart = (item) => cartCtxtConsumer.addItem(item);
  return (
    <Fragment>
      {foundId.map((item) => (
        <div className={classes.product_detail_container}>
          <div className={classes.product_img}>
            <img src={item.img} alt="pepsi" />
          </div>
          <div className={classes.product_description}>
            <h1>{item.title}</h1>
            <p>{item.completeData}</p>
            <h2>price : {item.price} ₹</h2>
            <div className={classes.buttons}>
              <button
                className={classes.cart_button}
                onClick={() => addtoCart(item)}
              >
                add to cart{" "}
                <span>
                  <i className="ios ion-ios-cart"></i>
                </span>
              </button>
              <button className={classes.wishlist_button}>
                move to wishlist{" "}
                <span>
                  <i className="ios ion-ios-heart"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default ProductDetail;
