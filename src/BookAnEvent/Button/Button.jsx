/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowChevronRight5 } from "../icons/ArrowChevronRight5";
import "./style.css";

export const Button = ({ type, size, icon, className, divClassName, text = "Large" }) => {
  return (
    <div className={`button ${size} ${type} icon-${icon} ${className}`}>
      {icon && (
        <>
          <div className="div">
            {size === "extra-small" && <>Extra Small</>}

            {size === "small" && <>Small</>}

            {size === "medium" && <>Medium</>}

            {size === "large" && <>{text}</>}

            {size === "extra-large" && <>Extra Large</>}
          </div>
          <ArrowChevronRight5 className="arrow-chevron-right" color={type === "primary" ? "white" : "#A68F6E"} />
        </>
      )}

      {!icon && (
        <div className={`extra-small-2 ${divClassName}`}>
          {size === "extra-small" && <>Extra Small</>}

          {size === "small" && <>Small</>}

          {size === "medium" && <>Medium</>}

          {size === "large" && <>{text}</>}

          {size === "extra-large" && <>Extra Large</>}
        </div>
      )}
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["large", "extra-large", "extra-small", "small", "medium"]),
  icon: PropTypes.bool,
  text: PropTypes.string,
};
