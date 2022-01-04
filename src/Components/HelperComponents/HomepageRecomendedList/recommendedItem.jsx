import { Fragment } from "react";
import "./recommendedItem.css";
import { ITEMS_ARRAY } from "../../../data";

const recommendedItem = () => {
  const filtered_homepageItems = ITEMS_ARRAY.filter((items) => items.name === 'HOME_PAGE_ITEMS');
  return (
    <Fragment>
      {filtered_homepageItems.map((items) => (
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
            <button className="btn btn-sm btn-success">
              Add to Cart
              <span>
                <i className="icon ion-md-cart" style={{marginLeft:'0.5rem'}}></i>
              </span>
            </button>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default recommendedItem;
