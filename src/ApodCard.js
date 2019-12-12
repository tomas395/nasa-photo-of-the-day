import React from "react";

const ApodCard = pod => {
  return (
    <div className="aPodCard">
      <div className="aPodCard2">
        <h1>{pod.title}</h1>
        <img src={pod.image} alt={pod.title} />
        <p>Explanation: {pod.explanation}</p>
        <h2>{pod.date}</h2>
      </div>
    </div>
  );
};

export default ApodCard;
