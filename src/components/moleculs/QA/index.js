import React, { useState } from "react";

const QA = ({ q, a }) => {
  const [ansStatus, setAnsStatus] = useState(true);
  const showAnswer = () => {
    setAnsStatus(!ansStatus);
  };
  return (
    <>
      <div className="relative">
        <div className={`transition ${ansStatus ? "" : "h-44"}`}>
          <p
            onClick={showAnswer}
            className="text-[24px] hover:cursor-pointer bg-white py-1 z-20"
          >
            {ansStatus ? <span>+</span> : <span>-</span>} {q}
          </p>
          <p
            className={`text-[20px] absolute transition ease-in-out duration-300 py-2 border-b border-black ${
              ansStatus ? "inline opacity-0" : "translate-y-7 top-0 opacity-100"
            }`}
          >
            {a}
          </p>
        </div>
      </div>
    </>
  );
};

export default QA;
