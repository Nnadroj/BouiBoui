import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import SwipeButtons from "./SwipeButtons";
import restaurants from "../../services/RestaurantData";
import "./GlobalCard.css";

export default function GlobalCard() {
  const [currentIndex, setCurrentIndex] = useState(restaurants.length - 1);
  const [lastDirection, setLastDirection] = useState();
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(restaurants.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < restaurants.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < restaurants.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div className="TinderCard">
      {restaurants.map((resto, index) => (
        <TinderCard
          ref={childRefs[index]}
          className="swipe"
          key={resto.name}
          onSwipe={(dir) => swiped(dir, resto.name, index)}
          onCardLeftScreen={() => outOfFrame(resto.name, index)}>
          <div
            style={{ backgroundImage: `url(${resto.img})` }}
            className="card-content">
            <h3>{resto.name}</h3>
          </div>
          <SwipeButtons />
        </TinderCard>
      ))}
      ;
    </div>
  );
}
