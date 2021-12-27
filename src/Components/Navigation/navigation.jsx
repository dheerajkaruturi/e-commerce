import React, { Fragment } from "react";
import './navigation.css'

const MENU_ITEMS = [
  "Branded Food",
  "Households",
  "Veggies & Fruits",
  "Kitchen",
  "Short Codes",
  "Beverages",
  "Pet Food",
  "Frozen Food Snack",
  "Bread & Bakery",
];
const Navigation = () => {
  const mappedItems = MENU_ITEMS.map((items) => <li key={Math.random()*2}>{items}</li>); 
  return (
    <Fragment>
      <aside className="aside-menu">
        <div className="aside-menu__block">
          <ul className="aside-menu__items">{mappedItems}</ul>
        </div>
      </aside>
    </Fragment>
  );
};

export default Navigation;
