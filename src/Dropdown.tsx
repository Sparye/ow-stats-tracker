import React from "react";
import Select from "react-select";
import "./Dropdown.css";

type Props = {
  heroName: string;
  setHeroName: (value: string) => void;
  setHeading: (label: string) => void;
};

const Dropdown: React.FC<Props> = (props) => {
  var heroList = [
    { value: "zenyatta", label: "Zenyatta" },
    { value: "roadhog", label: "Roadhog" },
    { value: "bastion", label: "Bastion" },
    { value: "dVa", label: "D.Va" },
    { value: "genji", label: "Genji" },
    { value: "hanzo", label: "Hanzo" },
    { value: "junkrat", label: "Junkrat" },
    { value: "lúcio", label: "Lúcio" },
    { value: "mccree", label: "Mccree" },
    { value: "mei", label: "Mei" },
    { value: "mercy", label: "Mercy" },
    { value: "orisa", label: "Orisa" },
    { value: "pharah", label: "Pharah" },
    { value: "reaper", label: "Reaper" },
    { value: "reinhardt", label: "Reinhardt" },
    { value: "soldier76", label: "Soldier 76" },
    { value: "sombra", label: "Sombra" },
    { value: "symmetra", label: "Symmetra" },
    { value: "torbjörn", label: "Torbjörn" },
    { value: "tracer", label: "Tracer" },
    { value: "widowmaker", label: "Widowmaker" },
    { value: "winston", label: "Winston" },
    { value: "zarya", label: "Zarya" },
  ];
  return (
    <div className="container">
      <div className="dropdown">
        <Select
          options={heroList}
          onChange={(e) => {
            console.log(e);
            props.setHeroName(e!.value);
            props.setHeading(e!.label);
          }}
        />
      </div>
    </div>
  );
};

export default Dropdown;

// export default function Dropdown() {

//   return (
//     <div>
//       <Select options={heroList} />
//     </div>
//   );
// }
