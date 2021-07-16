import React, { FC } from "react";
import "./Card.css";

const Card: React.FC<string> = (props) => {
  console.log(props);
  const keys = Object.keys(props);
  const values = Object.values(props);
  //   let obj = JSON.parse(props);
  return (
    <div className="card">
      <div className="names">
        {keys.map((key) => {
          return (
            <div className="nameBlock" key={key}>
              {key}
            </div>
          );
        })}
      </div>

      <div className="values">
        {values.map((value) => {
          return (
            <div className="valueBlock" key={value}>
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
