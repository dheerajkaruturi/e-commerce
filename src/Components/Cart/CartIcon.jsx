import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const CartIcon = () => {
    return (
      <Fragment>
        <Link to='/cart'>
          <i className="icon ion-md-cart text-black"></i>
          <span className="number__badge">5</span>
        </Link>
      </Fragment>
    );
}

export default CartIcon
