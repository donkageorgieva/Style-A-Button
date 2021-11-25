import React from "react";
import { useState } from "react";
const Slider = (props) => {
  const [currValue, setValue] = useState(0);

  return (
    <React.Fragment>
      <div
        className={[`flex items-center space-x-2 my-2 ${props.classes}`].join(
          " "
        )}
      >
        <input
          type="range"
          min={props.min}
          max={props.max}
          value={currValue}
          onChange={(e) => {
            props.changeValue(e.target.value);
            setValue(e.target.value);
          }}
          step="1"
          id="slider"
          className="w-full h-7 "
          name="range"
        />
        <span className="text-gray-800 dark:text-indigo-200 text-sm ">
          {" "}
          {currValue}{" "}
        </span>
      </div>
    </React.Fragment>
  );
};

export default Slider;
