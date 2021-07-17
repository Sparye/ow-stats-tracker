import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./Card";
import Dropdown from "./Dropdown";

function App() {
  const [userData, setUserData] = useState<string>("");
  const [nameData, setNameData] = useState<string[]>();
  const [heroName, setHeroName] = useState<string>("zenyatta");

  const input = "zenyatta";
  useEffect(() => {
    getStats();
  }, [heroName]);

  const URLHead = "https://ow-api.com/v1/stats/pc/us/JigglyPuff-11568/heroes/";

  const getStats = async () => {
    // const response = await fetch(apiURL);
    // const jsonData = await response.json();
    // console.log(jsonData.competitiveStats.careerStats[input].average);

    // await setUserData(jsonData.competitiveStats.careerStats[input].average);
    // console.log(userData);
    // const keys = await Object.keys(userData);
    // console.log(keys);

    fetch(`${URLHead}${heroName}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);

        const average = data.competitiveStats.careerStats[heroName].average;
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
      <h1>{heroName}</h1>
      <Dropdown heroName={heroName} setHeroName={setHeroName} />
      {userData && <Card {...userData} />}
    </div>
  );
}

export default App;
