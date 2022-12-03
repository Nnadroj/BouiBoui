import React from "react";
import "./TinderDataProfile.css";

function TinderDataProfile({ currentResto }) {
  return (
    <div id="TinderDataProfile">
      {currentResto ? (
        <>
          <h2>{currentResto.name}</h2>
          <div>{currentResto.category}</div>
          <div>{currentResto.distance}</div>
          <div>{currentResto.street}</div>
          <div>{currentResto.postcode}</div>
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default TinderDataProfile;
