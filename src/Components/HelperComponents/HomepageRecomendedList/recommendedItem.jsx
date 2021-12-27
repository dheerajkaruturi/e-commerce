import { Fragment } from "react";
import "./recommendedItem.css";
import { HOME_PAGE_ITEMS } from "../../../data";

const recommendedItem = () => {
  return (
    <Fragment>
      {HOME_PAGE_ITEMS.map((items) => (
        <div className="list_display">
          <img src={items.img} alt="items" />
          <div className="item__description">
            <p className="item_name">{items.title}</p>
            <p className="item_cost">Offer Price: {items.price}₹</p>
            <p className="product__about">{items.description}</p>
            <p className="ratings">
              <i className="ion-ios-star"></i>
              <i className="ion-ios-star"></i>
              <i className="ion-ios-star"></i>
              <i className="ion-ios-star"></i>
              <i className="ion-ios-star"></i>
              {items.rating}
            </p>
          </div>
          <div className="add__cart">
            <button className="btn btn-sm btn-outline-warning">+</button>
            <button className="btn btn-sm btn-outline-success">
              Add to Cart
            </button>
            <button className="btn btn-sm btn-outline-danger">-</button>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default recommendedItem;
