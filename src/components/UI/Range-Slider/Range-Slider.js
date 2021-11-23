import React from "react";
const Slider = (props) => {
  return (
    <React.Fragment>
      <div className={[`flex space-x-2 my-2 ${props.classes}`].join(" ")}>
        <input
          type="range"
          min={props.min}
          max={props.max}
          onChange={props.changeValue}
          step="1"
          id="slider"
          className="w-full h-7 "
          name="range"
        />
        <span className="text-gray-800 dark:text-indigo-200 text-sm ">
          {" "}
          {props.value}{" "}
        </span>
      </div>
    </React.Fragment>
  );
};

export default Slider;
