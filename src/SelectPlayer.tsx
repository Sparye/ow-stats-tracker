import React from "react";
import Select from "react-select";
import "./Dropdown.css";

type Props = {
  setPlayerName: (value: string) => void;
  //   setHeading: (label: string) => void;
};

const SelectPlayer: React.FC<Props> = (props) => {
  var playerList = [
    { value: "JigglyPuff-11568", label: "JigglyPuff#11568" },
    { value: "Luffy-12914", label: "Luffy#12914" },
  ];
  return (
    <div className="container">
      <div className="dropdown">
        <Select
          placeholder="Select A Player"
          options={playerList}
          onChange={(e) => {
            console.log(e);
            props.setPlayerName(e!.value);
          }}
        />
      </div>
    </div>
  );
};

export default SelectPlayer;
