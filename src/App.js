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
        title={pod.title}
        explanation={pod.explanation}
        image={pod.url}
        date={pod.date}
      />

      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
