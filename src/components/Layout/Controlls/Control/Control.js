import Slider from "../../../UI/Range-Slider/Range-Slider";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buttonStyleActions } from "../../../../store/button-styles";
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
    console.log(currControl.value);
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

      <Slider
        classes={
          toggle
            ? "transition duration-400 ease-in-out"
            : "w-o h-0 opacity-0 transition duration-400 ease-in-out "
        }
        min={0}
        max={50}
        label="padding"
        changeValue={(value) => {
          addStyle(value);
        }}
      />
    </div>
  );
};

export default Control;
