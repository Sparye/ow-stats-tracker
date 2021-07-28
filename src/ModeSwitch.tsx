import React, { useState, Dispatch, SetStateAction } from "react";
import "./ModeSwitch.css";
import { ButtonGroup, ToggleButton, ToggleButtonGroup } from "react-bootstrap";

type Props = {
  setCompMode: Dispatch<SetStateAction<boolean>>;
};

const ModeSwitch: React.FC<Props> = (props) => {
  const [radioValue, setRadioValue] = useState("1");

  return (
    <div className="container">
      <ButtonGroup>
        <ToggleButton
          key="1"
          id="tbg-btn-1"
          type="radio"
          value="1"
          variant="outline-primary"
          checked={radioValue === "1"}
          onChange={(e) => {
            setRadioValue(e.currentTarget.value);
            props.setCompMode(true);
          }}
        >
          Competitive{" "}
        </ToggleButton>
        <ToggleButton
          key="2"
          id="tbg-btn-2"
          type="radio"
          value="2"
          variant="outline-success"
          checked={radioValue === "2"}
          onChange={(e) => {
            setRadioValue(e.currentTarget.value);
            props.setCompMode(false);
          }}
        >
          Quick Play{" "}
        </ToggleButton>
      </ButtonGroup>
    </div>
  );
};

export default ModeSwitch;
