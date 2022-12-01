import React from "react";
import Button from "../components/Button";

function Page1() {
  const question1 = "What do you want to do?";
  const buttonsPage1 = ["Yum", "Gulp", "Shop", "Chill"];
  return (
    <div>
      <h2> {question1}</h2>
      {buttonsPage1.map((button) => {
        return <Button destination={`/${button}`}>{button}</Button>;
      })}
    </div>
  );
}

export default Page1;
