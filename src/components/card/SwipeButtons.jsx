import React, { useState } from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Match from "./Match";

export default function SwipeButtons(props) {
  const { goBack, swipe, handleDetail, dataList } = props;
  const [isShown, setIsShown] = useState(false);

  const handleBack = () => {
    goBack();
  };

  const handleSwipeLeft = () => {
    swipe("left");
  };

  const handleSwipeRight = () => {
    setIsShown(!isShown);
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
        onClick={handleSwipeRight}
      >
        <FavoriteIcon fontSize="large" />
        {isShown && <Match swipe={swipe} dataList={dataList} />}
      </IconButton>
      <IconButton className="icon swipeButtons_arrow" onClick={handleDetail}>
        <ArrowDownwardIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
