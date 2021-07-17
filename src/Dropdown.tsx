import React from "react";
import Select from "react-select";

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
    <div>
      <Select
        options={heroList}
        onChange={(e) => {
          console.log(e);
          props.setHeroName(e!.value);
        }}
      />
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
