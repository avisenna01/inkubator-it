import React, { useState } from "react";
import Button from "@/components/atoms/Button";

const MiniNavbar = () => {
  const [contentValue, setContentValue] = useState("website");
  return (
    <div className="flex items-center gap-2 justify-start py-[20px]">
      <Button
        onClick={() => {
          setContentValue("website");
        }}
        color="border border-[#ECAF23]"
        textButton="Website"
      />
      <Button
        onClick={() => {
          setContentValue("mobile");
        }}
        color="border border-[#ECAF23]"
        textButton="Mobile"
      />

      <Button
        onClick={() => {
          setContentValue("desktop");
        }}
        color="border border-[#ECAF23]"
        textButton="Desktop"
      />

      <Button
        onClick={() => {
          setContentValue("lainnya");
        }}
        color="border border-[#ECAF23]"
        textButton="Lainnya"
      />
    </div>
  );
};
export default MiniNavbar;
