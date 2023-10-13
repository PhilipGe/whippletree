/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowChevronRight5 = ({ color = "white", className }) => {
  return (
    <svg
      className={`arrow-chevron-right-5 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M7.293 4.707L14.586 12L7.293 19.293L8.707 20.707L17.414 12L8.707 3.293L7.293 4.707Z"
        fill={color}
      />
    </svg>
  );
};

ArrowChevronRight5.propTypes = {
  color: PropTypes.string,
};
