import React from "react";
import restaurants from "../../services/RestaurantData";
import "./Match.css";

export default function Match({ swipe }) {
  const handleClose = () => {
    swipe("right");
  };
  return (
    <div id="popup1" class="overlay">
      <div class="popup">
        <h2>It's a match !</h2>
        <button class="close" href="#popup1" onClick={handleClose}>
          &times;
        </button>
        <div class="content">
          <p>{restaurants.name}</p>
          <p>{restaurants.address}</p>
          <p>Itinéraire</p>
        </div>
      </div>
    </div>
  );
}
