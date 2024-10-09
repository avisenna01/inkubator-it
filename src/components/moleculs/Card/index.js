import React from "react";

const Card = ({ title, children }) => {
  return (
    <div className="shadow-lg text-center p-8 pb-[60px]">
      <p className="font-semibold">{title}</p>
      <p>{children}</p>
    </div>
  );
};

export default Card;
