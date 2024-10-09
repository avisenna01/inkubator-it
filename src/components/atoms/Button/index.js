import React from "react";
import PropTypes from "prop-types";

const Button = ({
  onClick = () => {},
  type,
  color = "text-[#ECAF23]",
  size,
  textButton = "Button",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`h-10 px-6 font-thin hover:bg-[#ECAF23] transition-all rounded-md ${color} ${size}`}
    >
      {textButton}
    </button>
  );
};

export default Button;
