import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
export default function SwipeButtons(props) {
  const { goBack, swipe, canSwipe } = props;
  return (
    <div className="swipeButtons">
      <IconButton className="icon swipeButtons_repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="icon swipeButtons_close">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="icon swipeButtons_favorite">
        <FavoriteIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
