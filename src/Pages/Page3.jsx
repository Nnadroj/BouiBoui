import React from "react";
import Button from "../components/Button";
import { useParams } from "react-router-dom";

function Page3() {
  const question3 = "What type of food do you want? ";
  const buttonsPage3 = ["Deals", "Newbies", "Categories", "See all"];
  const { list } = useParams();
  console.log(list);
  return (
    <div>
      <h2> {question3}</h2>
      {buttonsPage3.map((button) => {
        return <Button list={list}>{button}</Button>;
      })}
    </div>
  );
}

export default Page3;
