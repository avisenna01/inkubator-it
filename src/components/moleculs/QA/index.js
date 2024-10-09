import React, { useState } from "react";

const QA = ({ q, a }) => {
  const [ansStatus, setAnsStatus] = useState(false);
  const showAnswer = () => {
    setAnsStatus(!ansStatus);
  };
  return (
    <div>
      <p onClick={showAnswer}>{q}</p>
      <p
        className={`transition ease-in-out delay-1000 ${
          ansStatus ? "inline" : "hidden"
        }`}
      >
        {a}
      </p>
    </div>
  );
};

export default QA;
