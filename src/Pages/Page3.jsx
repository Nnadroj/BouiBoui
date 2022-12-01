import React, {useState, useEffect} from "react";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "./Pages.css";
import restaurants from "../services/RestaurantData";
import getDistance from "../services/getDistance";

function Page3({userCoords}) {

  const [dataList, setDataList] = useState([]);
  const question3 = "What type of food do you want? ";
  
  useEffect(() => {
    userCoords &&
    setDataList(
        restaurants.filter(
          (el) =>
            el.offer.length && 
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
  
  return (
    <motion.div
      className="page3-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      transition={{ duration: 0.3 }}
    >
      <h2>{question3}</h2>
      {
        dataList.map(resto => <div>{resto.name}</div>)
      }
    </motion.div>
  )
}

export default Page3;
