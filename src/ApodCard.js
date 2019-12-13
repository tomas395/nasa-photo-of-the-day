import React from "react";
import { PodText, PodImg, PodTitle } from "./styled-components";

const ApodCard = pod => {
  return (
    <PodText>
      <div className="aPodCard">
        <div className="aPodCard2">
          <header>
            <PodTitle>Picture of the day courtesy of NASA!</PodTitle>
          </header>
          <h2>"{pod.title}"</h2>
          <h2>{pod.date}</h2>
          <PodImg src={pod.image} alt={pod.title} />

          <p className="App">Explanation: {pod.explanation}</p>
        </div>
      </div>
    </PodText>
  );
};

export default ApodCard;
