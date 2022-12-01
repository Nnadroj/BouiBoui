import React from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { motion } from "framer-motion";

function Page2() {
  const question2 = "Choose a category";
  const buttonsPage2 = ["Deals", "Newbies", "Categories", "See all"];
  const { category } = useParams();
  console.log(category);

  return (
    <motion.div
      className="page2-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      transition={{ duration: 0.3 }}
    >
      {category !== "Yum" ? 
        <div>Coming soon</div> : 
        <>
          <h2> {question2}</h2>
          {buttonsPage2.map((button) => {
            return <Button destination={`/${category}/${button}`}>{button}</Button>;
          })}
        </>
      }
    </motion.div>
  );
}

export default Page2;
