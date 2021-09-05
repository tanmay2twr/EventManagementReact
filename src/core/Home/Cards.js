import React from "react";
import "./Cards.css";
import img10 from "../../img/img-10.jpg";
import img11 from "../../img/img-11.jpg";
import img12 from "../../img/img-12.jpg";
import img16 from "../../img/img-16.jpg";
import img15 from "../../img/img-15.jpg";

import CardItem from "./CardItem";
function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Events!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img10}
              text="
              A Experienced Wedding Planner is a GIFT you give yourself..and 
              then wonder how you every thought 
              you could manage without one."
              label="Wedding"
              path="/services"
            />
            <CardItem
              src={img11}
              text="Live the Party, Love the Party, Be the Party"
              label="Party"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img12}
              text="To achieve great things, two things are needed: a plan and not quite enough time"
              label="Business"
              path="/services"
            />
            <CardItem
              src={img16}
              text="If we are to preserve culture we must continue to create it"
              label="Cultural"
              path="/products"
            />
            <CardItem
              src={img15}
              text="Nothing you wear is more important than your smile."
              label="Stand Up Comedy"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
