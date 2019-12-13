import React from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import { podText, podImg, podTitle } from "./styled-components";

const ApodCard = pod => {
  return (
    <podText>
      <div className="aPodCard">
        <div className="aPodCard2">
          <header>
            <podTitle>Picture of the day courtesy of NASA!</podTitle>
          </header>
          <h2>"{pod.title}"</h2>
          <h2>{pod.date}</h2>
          <podImg>
            <img src={pod.image} alt={pod.title} />
          </podImg>
          <p className="App">Explanation: {pod.explanation}</p>
        </div>
      </div>
    </podText>
  );
};

export default ApodCard;
