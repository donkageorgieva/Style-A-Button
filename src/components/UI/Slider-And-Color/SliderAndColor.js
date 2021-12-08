import Slider from "../Range-Slider/Range-Slider";
import { useSelector } from "react-redux";
import React from "react";
import ColorPicker from "../ColorPicker/ColorPicker";
const SliderAndColor = (props) => {
  const currOption = useSelector((state) =>
    state.reducer.options.find((option) => option.name === props.setting)
  );
  const currMode = useSelector((state) => state.reducer.mode);
  const chosenValue =
    currMode === "style" ? currOption.value : currOption.hoverValue;
  const colorhex = chosenValue.find((v) => {
    if (v.toString().includes("#")) {
      return v;
    }
  });
  const colorIndex = chosenValue.indexOf(colorhex);

  const sliders = chosenValue.map((v, index) => {
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
          currValue={chosenValue[index]}
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
            value={chosenValue[colorIndex]}
          />
        </div>

        <div>{sliders}</div>
      </div>
    </React.Fragment>
  );
};

export default SliderAndColor;
