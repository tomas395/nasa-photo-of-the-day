import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ApodCard from "./ApodCard";

function App() {
  const [pod, setApod] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=hofCICR2ekMLxN3GiGmInR1tyruck8ehWH4bjU8E"
      )
      .then(res => {
        console.log("Fetched!", res);
        setApod(res.data);
      })
      .catch(err => {
        console.log("Error: The data was not returned!", err);
      });
  }, []);
  return (
    <div className="App">
      <ApodCard
        key={pod.id}
        date={pod.date}
        title={pod.title}
        explanation={pod.explanation}
        image={pod.url}
      />
    </div>
  );
}

export default App;
