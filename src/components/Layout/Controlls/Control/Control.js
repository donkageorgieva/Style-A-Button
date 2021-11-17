import Slider from "../../../UI/Range-Slider/Range-Slider";
import React, { useState } from "react";
const Control = (props) => {
  const [value, setValue] = useState(0);
  return (
    <div className="my-4">
      <span className=" text-sm text-gray-800 dark:text-indigo-200">
        {props.setting}
      </span>
      <Slider
        min={0}
        max={100}
        value={value}
        label="padding"
        changeValue={() => {
          let currValue = value + 1;
          setValue(currValue);
          console.log(value);
        }}
      />
    </div>
  );
};

export default Control;
