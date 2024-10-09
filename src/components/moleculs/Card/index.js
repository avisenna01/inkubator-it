import React from "react";

const Card = ({ title, children }) => {
  return (
    <div className="shadow-lg text-center p-8 pb-[60px] hover:bg-[#4D194D] hover:text-white transition-all hover:scale-105">
      <p className="font-semibold">{title}</p>
      <p>{children}</p>
    </div>
  );
};

export default Card;
