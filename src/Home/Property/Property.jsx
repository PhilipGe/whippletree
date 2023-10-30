/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Property = ({ className, rectangleClassName, rectangle = "/img/rectangle-2.svg" }) => {
  return (
    <div className={`property ${className}`}>
      <img className={`rectangle ${rectangleClassName}`} alt="Rectangle" src={rectangle} />
      <div className="view-wines" onClick={() => {window.location.href = "/#/online-wine-store"}}>VIEW WINES</div>
    </div>
  );
};

Property.propTypes = {
  rectangle: PropTypes.string,
};
