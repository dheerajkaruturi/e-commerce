import React, { Fragment } from "react";
import Header from "../Header/header";
import Navigation from "../Navigation/navigation";
import ShoppingCart from "../ShoppingCart/shoppingCart";
import Main from "../Main/main";
import "./home.css";
import Bakery from "../ItemsCategories/Bakery";
import BrandedFood from "../ItemsCategories/BrandedFood";
import Beverages from "../ItemsCategories/Beverages";
import FrozenFood from "../ItemsCategories/FrozenFood";
import HouseHold from "../ItemsCategories/HouseHold";
import Kitchen from "../ItemsCategories/Kitchen";
import PetFood from "../ItemsCategories/PetFood";
import VegetableFruits from "../ItemsCategories/Vegetable_Fruits";
import { Route } from "react-router-dom";

const home = () => {
  return (
    <Fragment>
      <Header />
      <Navigation />
      <div className="main-section p-3">

        <Route path="/home">
          <Main />
        </Route>

        <Route path="/bakery">
          <Bakery />
        </Route>

        <Route path="/beverages">
          <Beverages />
        </Route>

        <Route path="/brandedfood">
          <BrandedFood />
        </Route>

        <Route path="/frozenfood">
          <FrozenFood />
        </Route>

        <Route path="/household">
          <HouseHold />
        </Route>

        <Route path="/kitchen">
          <Kitchen />
        </Route>

        <Route path="/petfood">
          <PetFood />
        </Route>

        <Route path="/vegetablesfruits">
          <VegetableFruits />
        </Route>

        <Route path="/cart">
          <ShoppingCart />
        </Route>
      </div>
    </Fragment>
  );
};

export default home;
