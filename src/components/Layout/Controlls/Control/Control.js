import Slider from "../../../UI/Range-Slider/Range-Slider";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buttonStyleActions } from "../../../../store/button-styles";
import Dropdown from "../../../UI/Dropdown/Dropdown";
import ColorPicker from "../../../UI/ColorPicker/ColorPicker";
import SliderAndColor from "../../../UI/Slider-And-Color/SliderAndColor";
import { useEffect } from "react";
import { Transition } from "react-transition-group";
const Control = (props) => {
  const controlRef = useRef();
  const dispatch = useDispatch();
  const currControl = useSelector((state) =>
    state.reducer.options.find(
      (option) => option.name.trim() === props.setting.trim()
    )
  );
  const stateMode = useSelector((state) => state.reducer.mode);
  const currValue =
    stateMode === "style" ? currControl.value : currControl.hoverValue;
  const addStyle = (value) => {
    dispatch(
      buttonStyleActions.changeStyle({
        name: props.setting,
        value,
        type: "SINGLE_VALUE",
        mode: stateMode,
      })
    );
  };
  const addMultipleStyles = (value, index) => {
    dispatch(
      buttonStyleActions.changeStyle({
        name: props.setting,
        value,
        type: "MULTIPLE_VALUES",
        index,
        mode: stateMode,
      })
    );
  };

  const [toggle, setToggle] = useState(false);
  const toggleControlHandler = () => {
    setToggle(!toggle);
  };
  const closeControl = () => {
    const newToggleState = false;
    setToggle(newToggleState);
  };
  useEffect(() => {
    const checkIfClikedOutside = (e) => {
      if (
        controlRef.current &&
        !controlRef.current.contains(e.target) &&
        e.target.tagName.toLowerCase() !== "button"
      ) {
        closeControl();
      }
    };
    document.addEventListener("click", checkIfClikedOutside);
    return () => {
      document.removeEventListener("click", checkIfClikedOutside);
    };
  }, []);
  return (
    <div className="lg:my-2  lg:p-0 px-1 py-2" ref={controlRef}>
      <div
        className="flex items-center justify-between cursor-pointer "
        onClick={toggleControlHandler}
      >
        <h5 className=" text-sm text-gray-800 dark:text-indigo-200">
          {props.setting}
        </h5>
        <button>
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
      <Transition in={toggle} timeout={400}>
        {(state) => {
          return (
            <div
              className={
                state === "exited"
                  ? "opacity-0 transform translate-y-1  scale-0 transition-all duration-400 ease-in-out"
                  : "opacity-100 transform translate-y-0 translate-x-0 transition-all duration-400 ease-in-out scale-100"
              }
            >
              {!toggle ? null : props.color && !props.slider ? (
                <ColorPicker
                  onChange={(color) => {
                    addStyle(color);
                  }}
                  value={
                    stateMode === "style"
                      ? currControl.value
                      : currControl.hoverValue
                  }
                />
              ) : props.slider && !props.color ? (
                <Slider
                  id={props.setting}
                  min={0}
                  max={50}
                  changeValue={(value) => {
                    addStyle(value);
                  }}
                  currValue={currValue}
                  unit="px"
                />
              ) : props.dropdown && !props.input ? (
                <Dropdown
                  options={props.unit}
                  changeValue={(e) => {
                    addStyle(e.target.value);
                  }}
                  currValue={currValue}
                />
              ) : props.input ? (
                <input
                  onClick={(e) => {
                    e.target.select();
                  }}
                  onChange={(e) => {
                    addStyle(e.target.value);
                  }}
                  value={currValue}
                ></input>
              ) : props.slider && props.color ? (
                <SliderAndColor
                  setting={props.setting}
                  id={props.setting}
                  min={0}
                  max={50}
                  changeValue={(value, index) => {
                    addMultipleStyles(value, index);
                  }}
                  changeColor={(color, index) => {
                    addMultipleStyles(color, index);
                  }}
                  onChangeComplete={toggleControlHandler}
                  unit="px"
                />
              ) : null}
            </div>
          );
        }}
      </Transition>
    </div>
  );
};

export default Control;
