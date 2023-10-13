/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ArrowChevronDown = ({ className }) => {
  return (
    <svg
      className={`arrow-chevron-down ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 17.414L3.293 8.707L4.707 7.293L12 14.586L19.293 7.293L20.707 8.707L12 17.414Z"
        fill="black"
      />
    </svg>
  );
};
