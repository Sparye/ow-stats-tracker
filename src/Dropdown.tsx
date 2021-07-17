import React from "react";
import Select from "react-select";
import "./Dropdown.css";

type Props = {
  heroName: string;
  setHeroName: (value: string) => void;
};

const Dropdown: React.FC<Props> = (props) => {
  var heroList = [
    { value: "zenyatta", label: "Zenyatta" },
    { value: "roadhog", label: "Roadhog" },
  ];
  return (
    <div className="container">
      <div className="dropdown">
        <Select
          options={heroList}
          onChange={(e) => {
            console.log(e);
            props.setHeroName(e!.value);
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
