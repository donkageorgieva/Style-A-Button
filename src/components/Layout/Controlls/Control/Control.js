import Slider from "../../../UI/Range-Slider/Range-Slider";
import React, { useState } from "react";
const Control = (props) => {
  const [value, setValue] = useState(0);
  return (
    <div className="my-4">
      <div className="flex">
        <h5 className=" text-l text-gray-800 dark:text-indigo-200">
          {props.setting}
        </h5>
      </div>

      <Slider
        min={0}
        max={100}
        value={value}
        label="padding"
        changeValue={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Control;
