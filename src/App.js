import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

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
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;

// import React from "react";
// import ApodDisplay from "./components/ApodDisplay";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <p>
//         Read through the instructions in the README.md file to build your NASA
//         app! Have fun 🚀!
//       </p>
//       <h1>Astronomy Picture of the Day courtesy of NASA!</h1>
//       <ApodDisplay />
//     </div>
//   );
// }

// export default App;
