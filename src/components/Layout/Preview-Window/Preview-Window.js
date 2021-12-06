import useButtonStyles from "../../../hooks/useButtonStyles";
import { useSelector } from "react-redux";
import { useState } from "react";
import { TwitterPicker } from "react-color";
import React from "react";
const PreviewWindow = (props) => {
  const chosenStyles = useSelector((state) => state.reducer.options);
  const buttonStyles = useButtonStyles(chosenStyles);
  const [bgColorChanged, setBgColorChanged] = useState(null);
  const buttonText = useSelector((state) =>
    state.reducer.options.find(
      (option) => option.name.trim() === "Button text".trim()
    )
  );
  const changeBgColor = (color) => {
    setBgColorChanged(color.hex);
  };
  return (
    <div className="lg:p-4 lg:m-4  order-first lg:order-none w-screen">
      <div
        className={[
          ` lg:w-96 w-full h-96 flex justify-center items-center overflow-hidden transition ease-in-out duration-400`,
          `${bgColorChanged ? "" : "bg-gray-100 dark:bg-gray-900"}`,
        ].join("")}
        style={bgColorChanged ? { backgroundColor: bgColorChanged } : null}
      >
        <button style={buttonStyles}>{buttonText.value}</button>
      </div>
      <TwitterPicker onChange={changeBgColor} />
    </div>
  );
};

export default PreviewWindow;
