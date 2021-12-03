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
    <div className="p-4 m-4">
      <div
        className={[
          ` w-96 h-96 flex justify-center items-center overflow-hidden`,
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
