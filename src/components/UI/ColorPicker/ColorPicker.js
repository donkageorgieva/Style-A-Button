import { ChromePicker } from "react-color";
import { useState } from "react";
import React from "react";
const ColorPicker = (props) => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    const currToggleState = toggle;
    setToggle(!currToggleState);
  };
  //   const element = !toggle ? (

  return (
    <React.Fragment>
      {!toggle ? (
        <button
          style={{ backgroundColor: props.value }}
          className="w-100 cursor-pointer w-full h-8"
          onClick={toggleHandler}
        ></button>
      ) : (
        <ChromePicker
          onChange={(color) => {
            props.onChange(color.hex);
          }}
          color={props.value}
        />
      )}
    </React.Fragment>
  );
};

export default ColorPicker;
