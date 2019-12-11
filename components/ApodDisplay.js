// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function ApodDisplay() {
//   const [pod, setApod] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         "https://api.nasa.gov/planetary/apod?api_key=hofCICR2ekMLxN3GiGmInR1tyruck8ehWH4bjU8E"
//       )
//       .then(res => {
//         console.log("Fetched!", res);
//         setApod(res.data);
//       })
//       .catch(err => {
//         console.log("Error: The data was not returned!", err);
//       });
//   }, []);
// }
