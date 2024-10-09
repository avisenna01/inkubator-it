import React from "react";
import PropTypes from "prop-types";

const Button = ({
  onClick = () => {},
  type,
  color = "text-[#ECAF23]",
  size,
  textButton = "Button",
  className,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`font-normal h-10 px-6 text-[#ECAF23] hover:bg-[#ECAF23] hover:text-white transition-all rounded-md ${color} ${size} ${className}`}
    >
      {textButton}
    </button>
  );
};

export default Button;
