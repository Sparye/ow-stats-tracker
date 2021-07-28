import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./Card";
import Dropdown from "./Dropdown";
import SelectPlayer from "./SelectPlayer";
import Banner from "./Banner";
import ModeSwitch from "./ModeSwitch";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Alert, Spinner } from "react-bootstrap";

function App() {
  const [userData, setUserData] = useState<string>("");
  const [heroName, setHeroName] = useState<string>("zenyatta");
  const [heading, setHeading] = useState<string>("Zenyatta");
  const [playerName, setPlayerName] = useState<string>("JigglyPuff-11568");
  const [heroData, setHeroData] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [compMode, setCompMode] = useState<boolean>(true);

  useEffect(() => {
    getStats();
  }, [heroName, playerName, compMode]);

  // const URLHead = "https://ow-api.com/v1/stats/pc/us/JigglyPuff-11568/heroes/";
  const URLHead = "https://ow-api.com/v1/stats/pc/us/";

  const getStats = async () => {
    setIsLoading(true);
    fetch(`${URLHead}${playerName}/heroes/${heroName}`)
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        try {
          if (compMode) {
            const average = data.competitiveStats.careerStats[heroName].average;
            const names = Object.keys(average);
            setUserData(average);
          } else {
            const average = data.quickPlayStats.careerStats[heroName].average;
            const names = Object.keys(average);
            setUserData(average);
          }

          setHeroData(true);
          setIsLoading(false);
        } catch (error) {
          setHeroData(false);
          setIsLoading(false);
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
      <div className="modeSwitch">
        {" "}
        <ModeSwitch setCompMode={setCompMode} />
      </div>

      {isLoading ? (
        <div className="spinner">
          <Spinner animation="border"></Spinner>
        </div>
      ) : (
        [
          heroData ? (
            <Card data={userData} heroName={heroName} />
          ) : (
            <div className="alert">
              <Alert key={"warning"} variant={"warning"}>
                Not enough play time on the hero
              </Alert>
            </div>
          ),
        ]
      )}
    </div>
  );
}

export default App;
