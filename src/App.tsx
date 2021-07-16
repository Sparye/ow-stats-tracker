import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./Card";

function App() {
  const [userData, setUserData] = useState<string>("");
  const [nameData, setNameData] = useState<string[]>();

  const input = "zenyatta";
  useEffect(() => {
    getStats();
  }, []);

  const apiURL =
    "https://ow-api.com/v1/stats/pc/us/JigglyPuff-11568/heroes/zenyatta";

  const getStats = async () => {
    // const response = await fetch(apiURL);
    // const jsonData = await response.json();
    // console.log(jsonData.competitiveStats.careerStats[input].average);

    // await setUserData(jsonData.competitiveStats.careerStats[input].average);
    // console.log(userData);
    // const keys = await Object.keys(userData);
    // console.log(keys);
    fetch(apiURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);

        const average = data.competitiveStats.careerStats[input].average;
        const names = Object.keys(average);
        // console.log(names);
        // console.log(average);
        setUserData(average);
        setNameData(names);
      });
  };
  // const resp nse = axios.get(apiURL);

  return (
    <div className="App">
      <h1>{input}</h1>
      {userData && <Card {...userData} />}
    </div>
  );
}

export default App;
