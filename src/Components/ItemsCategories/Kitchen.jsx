import { Fragment, useContext } from "react";
import DataContext from "../../data";
import "./itemscategory.css";
import { Link } from 'react-router-dom';

const Kitchen = () => {
  const data = useContext(DataContext).filter(
    (items) => items.name === "KITCHEN"
  );
  return (
    <Fragment>
      <div className="card-display__container">
        {data.map((items) => (
          <div className="itemCard-wrapper">
            <Link to={`/items/${items.id}/itemdetails`}>
              <div className="img-holder">
                <img src={items.img} alt="lays" />
              </div>
            </Link>
            <div className="itemTitle__placeholder">
              <p>{items.title}</p>
            </div>
            <div className="item__price">
              <p>Price: {items.price} ₹</p>
            </div>
            <div className="item__description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                inventore dolorem iste! Debitis, totam. Perferendis sed quis qui
                quisquam quaerat!
              </p>
            </div>
            <div className="button__container">
              <button className="button cart-button">
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
export default Kitchen;
