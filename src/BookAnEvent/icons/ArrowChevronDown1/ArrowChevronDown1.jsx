/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowChevronDown1 = ({ color = "#F2AF5C", className }) => {
  return (
    <svg
      className={`arrow-chevron-down-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12.4976 17.1743L4.09033 8.76705L5.45565 7.40173L12.4976 14.4436L19.5395 7.40173L20.9048 8.76705L12.4976 17.1743Z"
        fill={color}
      />
    </svg>
  );
};

ArrowChevronDown1.propTypes = {
  color: PropTypes.string,
};
