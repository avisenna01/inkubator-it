import React from "react";

const Title = ({
  children,
  size = "text-[36px]",
  color = "text-white",
  className,
}) => {
  return (
    <p
      className={`${className} ${color} ${className} text-[36px] mb-[100px] font-bold underline decoration-solid  decoration-[20px] decoration-[#ECAF23] decoration-skip-ink-none underline-offset-[-6px]`}
    >
      {children}
    </p>
  );
};

export default Title;
