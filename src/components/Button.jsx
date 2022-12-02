import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button(props) {
  /*  console.log(props.children); */
  return (
    <div className="button-container">
      <Link to={props.destination}>
        <button className="button">{props.children}</button>
      </Link>
    </div>
  );
}

export default Button;
