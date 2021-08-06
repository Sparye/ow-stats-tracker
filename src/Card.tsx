import { cpuUsage } from "process";
import React, { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Grid, Paper } from "@material-ui/core";
import "./Card.css";

type Props = {
  data: string;
  heroName: string;
};

const Card: React.FC<Props> = (props) => {
  //   console.log(props);
  const keys = Object.keys(props.data);
  const values = Object.values(props.data);
  //   let obj = JSON.parse(props);
  var stats: String[] = [];
  for (let i = 0; i < keys.length; i++) {
    const text = keys[i] + ";" + values[i];
    stats.push(text);
  }
  console.log(stats);

  const splitData = (input: String) => {
    const splitedData = input.split(";");
    return splitedData;
  };
  return (
    <div className="block">
      <Grid container spacing={3}>
        {stats.map((data) => {
          const dataPair: String[] = splitData(data);
          const title: String = dataPair[0];
          const number: String = dataPair[1];
          return (
            <Grid
              container
              item
              sm={12}
              xs={12}
              spacing={3}
              key={Math.random()}
            >
              <Grid item sm={8}>
                <Paper>{title}</Paper>
              </Grid>
              <Grid item sm={4}>
                <Paper>{number}</Paper>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
    // <div className="block">
    //   <Container>
    //     <Row>
    //       <Col>
    //         {keys.map((key) => {
    //           return (
    //             <div
    //               className="nameBlock"
    //               key={key + props.heroName + Math.random()}
    //             >
    //               {key}
    //             </div>
    //           );
    //         })}
    //       </Col>
    //       <Col>
    //         {values.map((value) => {
    //           return (
    //             <div
    //               className="valueBlock"
    //               key={value + props.heroName + Math.random()}
    //             >
    //               {value}
    //             </div>
    //           );
    //         })}
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>

    // <div className="block">
    //   <div className="card">
    //     <div className="names">
    //       {keys.map((key) => {
    //         return (
    //           <div
    //             className="nameBlock"
    //             key={key + props.heroName + Math.random()}
    //           >
    //             {key}
    //           </div>
    //         );
    //       })}
    //     </div>

    //     <div className="values">
    //       {values.map((value) => {
    //         return (
    //           <div
    //             className="valueBlock"
    //             key={value + props.heroName + Math.random()}
    //           >
    //             {value}
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Card;
