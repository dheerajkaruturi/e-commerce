import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../Cart/CartIcon";
import "./header.css";

const header = () => {
  return (
    <Fragment>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <p className="navbar-brand">
            <span>C</span>orner <span>Store</span>
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <p>Events</p>
              <p>About</p>
              <p>Best Deals</p>
              <p>Services</p>
            </div>
          </div>
          <form className="d-flex">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              <i
                className="icon ion-md-search"
                style={{ fontSize: "15px" }}
              ></i>
            </button>
          </form>
          <div className="navbar-group__icon">
            <div className="icon__set">
              <CartIcon />
              <Link to="/home">
                <i className="icon ion-md-home text-black" style={{cursor:"pointer"}}></i>
              </Link>
              <i className="icon ion-md-person"></i>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default header;
