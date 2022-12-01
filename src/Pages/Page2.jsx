import React from "react";
import { useParams } from "react-router-dom";

import Button from "../components/Button";

function Page2() {
  const question2 = "Choose a category";
  const buttonsPage2 = ["Deals", "Newbies", "Categories", "See all"];
  const { category } = useParams();
  console.log(category);

  return (
    <div>
      <h2> {question2}</h2>
      {buttonsPage2.map((button) => {
        return <Button destination={`/${category}/${button}`}>{button}</Button>;
      })}
    </div>
  );
}

export default Page2;
