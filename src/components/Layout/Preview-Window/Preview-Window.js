import useButtonStyles from "../../../hooks/useButtonStyles";
import { useSelector } from "react-redux";
import { useState } from "react";
import { TwitterPicker } from "react-color";
import React from "react";
const PreviewWindow = (props) => {
  const [bgColorChanged, setBgColorChanged] = useState(null);
  const [hover, setHover] = useState(false);
  const chosenStyles = useSelector((state) => state.reducer.options);
  const buttonStyles = useButtonStyles(chosenStyles, hover);
  const buttonText = useSelector((state) =>
    state.reducer.options.find(
      (option) => option.name.trim() === "Button text".trim()
    )
  );
  const changeBgColor = (color) => {
    setBgColorChanged(color.hex);
  };
  const hoverHandler = (val) => {
    setHover(val);
  };
  return (
    <div className="lg:h-full lg:mx-4 lg:justify-center xl:items-center order-first lg:order-none w-screen lg:w-1/3 xl:w-2/3 flex flex-col">
      <div
        className={[
          ` lg:w-80 xl:w-96  w-full h-40 lg:h-96  flex justify-center items-center overflow-hidden transition ease-in-out duration-400 order-last md:order-first `,
          `${bgColorChanged ? "" : "bg-white shadow-md dark:bg-gray-900"}`,
        ].join("")}
        style={bgColorChanged ? { backgroundColor: bgColorChanged } : null}
      >
        <button
          style={buttonStyles}
          onMouseEnter={() => {
            hoverHandler(true);
          }}
          onMouseLeave={() => {
            hoverHandler(false);
          }}
        >
          {buttonText.value}
        </button>
      </div>
      <TwitterPicker onChange={changeBgColor} />
    </div>
  );
};

export default PreviewWindow;
