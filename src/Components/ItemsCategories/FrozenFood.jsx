import { Fragment } from "react";
import { ITEMS_ARRAY } from "../../data";
import "./itemscategory.css";

const FrozenFood = () => {
  const filtered_frozenFood = ITEMS_ARRAY.filter(
    (items) => items.name === "FROZEN_FOOD"
  );
  return (
    <Fragment>
      {filtered_frozenFood.map((items) => (
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
            <button className="btn add btn-sm btn-outline-warning">+</button>
            <button className="btn btn-sm btn-success">Add to Cart</button>
            <button className="btn minus btn-sm btn-outline-danger">-</button>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default FrozenFood;
