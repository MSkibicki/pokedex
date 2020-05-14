import React from "react";
import { Link } from "react-router-dom";
import "../css/Button.scss";

const Button = ({ text }) => {
  return (
    <div className="button">
      <Link to={"/"}>
        <button className="button-back">{text}</button>
      </Link>
    </div>
  );
};

export default Button;
