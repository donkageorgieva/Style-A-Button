import React from "react";
import { useState } from "react";
const Slider = (props) => {
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
          value={props.currValue}
          onChange={(e) => {
            props.changeValue(e.target.value);
          }}
          step="1"
          id="slider"
          className="w-full h-7 z-0 "
          name="range"
        />
        <span className="text-gray-800 dark:text-indigo-200 text-sm ">
          {" "}
          {props.currValue}{" "}
        </span>
      </div>
    </React.Fragment>
  );
};

export default Slider;
