import { Fragment } from "react";
import {HOME_PAGE_ITEMS} from '../../data'

const cart = (props) => {

    const cartItems = HOME_PAGE_ITEMS.map((items) => (
      <div className="cart-item_details">
        <div className="item_img">
          <img src={items.img} alt="shoe" />
        </div>
        <div className="item_title">
          <p>{items.title}</p>
        </div>
        <div className="item_cost">
          <p>{items.price} ₹</p>
        </div>
        <div className="item_edit">
          <button onClick={props.addtoCartHandler}>+1</button>
          <input value={props.addItem} disabled />
          <button onClick={props.removefromCartHandler}>-1</button>
        </div>
      </div>
    )); 

    return (
        <Fragment>
            {cartItems}
        </Fragment>
    )
}

export default cart
