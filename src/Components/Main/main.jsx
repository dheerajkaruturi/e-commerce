import React from "react";
import "./main.css";
import sale_picture from "../../assets/sale_photo.jpg";
import utensils from "../../assets/utensels.jpg";
import clothesSale from '../../assets/clothes-sale.jpg';
import petFood from '../../assets/pet-food.jpg';
import SaleAnnouncementCard from "../HelperComponents/SaleAnnouncementCards/SaleAnnouncementCard";

const main = () => {
  return (
    <section className="main-section p-3">
      <div className="flex--banner">
        <img src={sale_picture} alt="sale picture" className="sale_picture" />
      </div>
      <div className="card__container">
        <SaleAnnouncementCard offerImage={utensils} cardHeading="kitchen" />
        <SaleAnnouncementCard offerImage={clothesSale} cardHeading="fashion up" />
        <SaleAnnouncementCard offerImage={petFood} cardHeading="feed your pets" />
      </div>
    </section>
  );
};

export default main;
