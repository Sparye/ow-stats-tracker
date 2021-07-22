import React, { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
  return (
    <div className="block">
      <Container>
        <Row>
          <Col>
            {keys.map((key) => {
              return (
                <div
                  className="nameBlock"
                  key={key + props.heroName + Math.random()}
                >
                  {key}
                </div>
              );
            })}
          </Col>
          <Col>
            {values.map((value) => {
              return (
                <div
                  className="valueBlock"
                  key={value + props.heroName + Math.random()}
                >
                  {value}
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>

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
