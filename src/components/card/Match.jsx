import React from "react";
import "./Match.css";

export default function Match({ swipe, dataList }) {
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
          <p>{dataList.name}</p>
          <p>{dataList.address}</p>
          <button className="button">
            Appeler pour réserver :<br /> 06 23 54 12 58
          </button>
        </div>
      </div>
    </div>
  );
}
