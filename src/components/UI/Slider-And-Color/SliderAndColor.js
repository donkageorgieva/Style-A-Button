import Slider from "../Range-Slider/Range-Slider";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import useButtonStyles from "../../../hooks/useButtonStyles";
import ColorPicker from "../ColorPicker/ColorPicker";
const SliderAndColor = (props) => {
  const currOption = useSelector((state) =>
    state.reducer.options.find((option) => option.name === props.setting)
  );

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
      <div className="flex items-center justify-between">
        <div className="w-6/12 z-10">
          <ColorPicker
            onChange={(color) => {
              props.changeColor(color, colorIndex);
            }}
            value={currOption.value[colorIndex]}
          />
        </div>

        <div>{sliders}</div>
      </div>
    </React.Fragment>
  );
};

export default SliderAndColor;
