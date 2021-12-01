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

  const colorhex = currOption.value.find((v) => {
    if (v.toString().includes("#")) {
      return v;
    }
  });
  const colorIndex = currOption.value.indexOf(colorhex);

  const sliders = currOption.value.map((v, index) => {
    console.log(index, v);
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
            style={{ backgroundColor: colorhex }}
            onClick={toggleHandler}
          ></button>
          <div>{sliders}</div>
        </div>
      ) : (
        <ChromePicker
          onChange={(color) => {
            props.changeColor(color.hex, colorIndex);
          }}
          color={currOption.value[colorIndex]}
          onChangeComplete={props.onChangeComplete}
        />
      )}
    </React.Fragment>
  );
};

export default SliderAndColor;
