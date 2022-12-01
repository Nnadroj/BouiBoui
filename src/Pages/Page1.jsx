import React from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";

function Page1() {
  const question1 = "What do you want to do?";
  const buttonsPage1 = ["Yum", "Gulp", "Shop", "Chill"];
  return (
    <motion.div
      className="page1-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      transition={{ duration: 0.3 }}
    >
      <h2> {question1}</h2>
      {buttonsPage1.map((button) => {
        return <Button destination={`/${button}`}>{button}</Button>;
      })}
    </motion.div>
  );
}

export default Page1;
