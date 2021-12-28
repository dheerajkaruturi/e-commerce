import React from "react";
import "./main.css";
import sale_picture from "../../assets/sale_photo.jpg";
import utensils from "../../assets/utensels.jpg";
import lays from '../../assets/lays-packet-potato-chips.jpg'
import petFood from "../../assets/pet-food.jpg";
import SaleAnnouncementCard from "../HelperComponents/SaleAnnouncementCards/SaleAnnouncementCard";
import RecommendedItem from "../HelperComponents/HomepageRecomendedList/recommendedItem";
import Bakery from "../ItemsCategories/Bakery";
import PetFood from "../ItemsCategories/PetFood";

const main = () => {
  return (
    <section className="main-section p-3">
      <div className="flex--banner">
        <img src={sale_picture} alt="sale" className="sale_picture" />
      </div>
      <div className="card__container">
        <SaleAnnouncementCard offerImage={utensils} cardHeading="kitchen" />
        <SaleAnnouncementCard
          offerImage={lays}
          cardHeading="Snack Items"
        />
        <SaleAnnouncementCard
          offerImage={petFood}
          cardHeading="feed your pets"
        />
      </div>
      <div className="items-list">
        <h3>Recommended Items</h3>
        <RecommendedItem />
        <Bakery />
        <PetFood />
      </div>
    </section>
  );
};

export default main;
