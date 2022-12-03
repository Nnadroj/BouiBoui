import React, { useState } from "react";
import "./DetailedCard.css";
import "../../components/Button.css";
import Map from "./Map";

export default function DetailedCard({ currentResto }) {
  const [showMap, setShowMap] = useState(false);

  return (
    <>
      {currentResto ? (
        <div className="details-container">
          <div className="detailedcard-content">
            <p>{currentResto.name}</p>
            <p>{currentResto.street}</p>
            <p>{currentResto.postcocde}</p>
            <p>{currentResto.city}</p>
            <p>
              {currentResto.distance < 0
                ? `${currentResto.distance * 100}m`
                : `${currentResto.distance.toFixed(2)}km`}
            </p>
            <p>tel : 01 00 00 00 00</p>
            <p>mail : resto@resto.com</p>
            <button
              className="button"
              onClick={() => setShowMap(currentResto.coords)}
            >
              Show on map
            </button>
            {showMap && <Map coords={showMap} setShowMap={setShowMap}></Map>}
          </div>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}
