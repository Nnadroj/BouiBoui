import React from "react";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "./Pages.css";

function Page3() {
  const question3 = "What type of food do you want? ";
  const buttonsPage3 = ["Deals", "Newbies", "Categories", "See all"];
  const { list } = useParams();
  console.log(list);
  return (
    <motion.div
      className="page3-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      transition={{ duration: 0.3 }}
    >
      <h2>{question3}</h2>
      {buttonsPage3.map((button) => {
        return <Button list={list}>{button}</Button>;
      })}
    </motion.div>
  );
}

export default Page3;
