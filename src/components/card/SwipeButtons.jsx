import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
export default function SwipeButtons(props) {
  const { goBack, swipe } = props;

  const handleBack = () => {
    goBack();
  };

  const handleSwipeLeft = () => {
    swipe("left");
  };

  const handleSwipeRight = () => {
    swipe("right");
  };

  return (
    <div className="swipeButtons">
      <IconButton className="icon swipeButtons_repeat" onClick={handleBack}>
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="icon swipeButtons_close" onClick={handleSwipeLeft}>
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton
        className="icon swipeButtons_favorite"
        onClick={handleSwipeRight}>
        <FavoriteIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
