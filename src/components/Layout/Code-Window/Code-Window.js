import useButtonStyles from "../../../hooks/useButtonStyles";
import { useSelector } from "react-redux";
import { useRef } from "react";
import React from "react";
const CodeWindow = (props) => {
  const cssTextRef = useRef();
  const chosenStyles = useSelector((state) => state.reducer.options);
  const buttonStyles = useButtonStyles(chosenStyles);
  const buttonClassName = chosenStyles.find(
    (option) => option.name === "Button class"
  ).value;
  const copyToClipboardHandler = () => {
    const content = cssTextRef.current.textContent;
    navigator.clipboard.writeText(content);
  };
  const styleElements = [];

  for (const key in buttonStyles) {
    const seperatedWords = key.split(/(?=[A-Z])/);
    seperatedWords.forEach((word, index) => {
      seperatedWords[index] = word.toLowerCase();
    });
    const newCssName = seperatedWords.join("-");

    styleElements.push(`${newCssName}:  ${buttonStyles[key]}; ${"\n"}`);
  }

  return (
    <React.Fragment>
      <div className="p-4 m-4">
        <div className="bg-gray-100 dark:bg-gray-900   w-96 h-96 flex items-center text-sm text-gray-800 dark:text-indigo-200 justify-center  ">
          <span style={{ whiteSpace: "pre" }} ref={cssTextRef}>
            {buttonClassName.trim("") !== "" ? "." + buttonClassName : "button"}{" "}
            {"{\n"}
            {styleElements}
            {"}"}
          </span>
        </div>
        <button
          className="  w-96 dark:bg-indigo-700 h-24 dark:text-indigo-100"
          onClick={copyToClipboardHandler}
        >
          Copy to clipboard
        </button>
      </div>
    </React.Fragment>
  );
};

export default CodeWindow;
