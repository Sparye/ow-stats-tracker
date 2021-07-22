import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./Card";
import Dropdown from "./Dropdown";
import SelectPlayer from "./SelectPlayer";
import Banner from "./Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [userData, setUserData] = useState<string>("");
  const [nameData, setNameData] = useState<string[]>();
  const [heroName, setHeroName] = useState<string>("zenyatta");
  const [heading, setHeading] = useState<string>("Zenyatta");
  const [playerName, setPlayerName] = useState<string>("JigglyPuff-11568");

  useEffect(() => {
    getStats();
  }, [heroName, playerName]);

  // const URLHead = "https://ow-api.com/v1/stats/pc/us/JigglyPuff-11568/heroes/";
  const URLHead = "https://ow-api.com/v1/stats/pc/us/";

  const getStats = async () => {
    fetch(`${URLHead}${playerName}/heroes/${heroName}`)
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        try {
          const average = data.competitiveStats.careerStats[heroName].average;
          // const average = data.quickPlayStats.careerStats[heroName].average;
          const names = Object.keys(average);
          setUserData(average);
        } catch (error) {
          console.log(error);
        }
        // const average = data.competitiveStats.careerStats[heroName].average;
        // const names = Object.keys(average);
        // console.log(names);
        // console.log(average);
        // setUserData(average);
        // setNameData(names);
      });
  };
  // const resp nse = axios.get(apiURL);

  return (
    <div className="App">
      <Banner />
      <h1>{heading}</h1>
      <div className="selectContainer">
        <Container>
          <Row>
            <Col>
              <SelectPlayer setPlayerName={setPlayerName} />
            </Col>
            <Col>
              <Dropdown
                heroName={heroName}
                setHeroName={setHeroName}
                setHeading={setHeading}
              />
            </Col>
          </Row>
        </Container>
      </div>

      {userData && <Card data={userData} heroName={heroName} />}
    </div>
  );
}

export default App;
