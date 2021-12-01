import Slider from "../Range-Slider/Range-Slider";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import useButtonStyles from "../../../hooks/useButtonStyles";
import { ChromePicker } from "react-color";
const SliderAndColor = (props) => {
  const currOption = useSelector((state) =>
    state.reducer.options.find((option) => option.name === props.setting)
  );
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    const newState = !toggle;
    setToggle(newState);
  };
  const color = currOption.value.find((v) => {
    if (v.toString().includes("#")) {
      return v;
    }
  });
  const sliders = currOption.value.map((v, index) => {
    if (!isNaN(v)) {
      return (
        <Slider
          id={props.setting}
          min={props.min}
          max={props.max}
          changeValue={(val) => {
            props.changeValue(val, index);
          }}
          currValue={currOption.value[index]}
        />
      );
    }
  });

  return (
    <React.Fragment>
      {!toggle ? (
        <div className="flex items-center justify-between">
          <button
            className="h-4 w-4"
            style={{ backgroundColor: color }}
            onClick={toggleHandler}
          ></button>
          <div>{sliders}</div>
        </div>
      ) : (
        <ChromePicker />
      )}
    </React.Fragment>
  );
};

export default SliderAndColor;
