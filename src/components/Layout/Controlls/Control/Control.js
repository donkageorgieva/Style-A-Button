import Slider from "../../../UI/Range-Slider/Range-Slider";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buttonStyleActions } from "../../../../store/button-styles";
import { ChromePicker } from "react-color";
import Dropdown from "../../../UI/Dropdown/Dropdown";
const Control = (props) => {
  const dispatch = useDispatch();
  const currControl = useSelector((state) =>
    state.reducer.options.find(
      (option) => option.name.trim() === props.setting.trim()
    )
  );
  const addStyle = (value) => {
    dispatch(
      buttonStyleActions.changeStyle({
        name: props.setting,
        value,
      })
    );
    console.log(props.setting);
  };
  const changeColor = (color) => {
    console.log(color);
  };
  const [toggle, setToggle] = useState(false);
  const toggleControlHandler = () => {
    const newToggleState = !toggle;
    setToggle(newToggleState);
  };
  return (
    <div className="my-4">
      <div className="flex items-center justify-between">
        <h5 className=" text-sm text-gray-800 dark:text-indigo-200 transition duration-400">
          {props.setting}
        </h5>
        <button className="cursor-pointer" onClick={toggleControlHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5   text-gray-800 dark:text-indigo-200 transition duration-400"
            transform={toggle ? "rotate(-180)" : ""}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className={
          !toggle
            ? "opacity-0 transition duration-400 w-0 h-0"
            : "transition-duration-400"
        }
      >
        {!toggle ? null : props.color ? (
          <ChromePicker
            color="#fff"
            onChangeComplete={changeColor}
            onChange={changeColor}
          />
        ) : props.slider ? (
          <Slider
            id={props.setting}
            min={0}
            max={50}
            changeValue={(value) => {
              addStyle(value);
            }}
          />
        ) : props.dropdown ? (
          <Dropdown
            options={props.unit}
            changeValue={(value) => {
              addStyle(value);
            }}
          />
        ) : (
          <input></input>
        )}
      </div>
    </div>
  );
};

export default Control;
