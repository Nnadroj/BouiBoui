import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "./Pages.css";
import restaurants from "../services/RestaurantData";
import getDistance from "../services/getDistance";
import GlobalCard from "../components/card/GlobalCard";

function Page3({ userCoords }) {
  const [dataList, setDataList] = useState([]);
  const question3 = "What type of food do you want?";
  const { list } = useParams();

  useEffect(() => {
    userCoords &&
      setDataList(
        restaurants.filter(
          (el) =>
            manageDataListByparam(list, el) &&
            getDistance(
              userCoords.latitude,
              userCoords.longitude,
              el.coords.latitude,
              el.coords.longitude,
              "K"
            ) <= 5
        )
      );
  }, [userCoords]);

  const manageDataListByparam = (params, el) => {
    switch (params) {
      case "Deals":
        return el.offer.length;
      case "Newbies":
        return el.subscription_date < 8;
      case "Categories":
        return el.category;
      default:
        return true;
    }
  };

  return (
    <motion.div
      className="page3-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      transition={{ duration: 0.3 }}
    >
      <h2>{question3}</h2>
      {dataList.map((resto) =>
        list === "Categories" ? (
          <Button key={resto.category} destination={"/global-card"}>
            {resto.category}
          </Button>
        ) : (
          <GlobalCard dataList={dataList} />
        )
      )}
    </motion.div>
  );
}

export default Page3;
