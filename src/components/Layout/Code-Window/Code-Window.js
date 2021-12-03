import useButtonStyles from "../../../hooks/useButtonStyles";
import { useSelector } from "react-redux";
import React from "react";
const CodeWindow = (props) => {
  const chosenStyles = useSelector((state) => state.reducer.options);
  const buttonStyles = useButtonStyles(chosenStyles);
  console.log(buttonStyles);
  const buttonClassName = chosenStyles.find(
    (option) => option.name === "Button class"
  ).value;
  const styleElements = [];

  for (const key in buttonStyles) {
    const seperatedWords = key.split(/(?=[A-Z])/);
    seperatedWords.forEach((word, index) => {
      seperatedWords[index] = word.toLowerCase();
    });
    const newCssName = seperatedWords.join("-");

    styleElements.push(
      <p key={newCssName}>
        {" "}
        {newCssName}: {buttonStyles[key]};{" "}
      </p>
    );
  }

  return (
    <React.Fragment>
      <div className="p-4 m-4">
        <div className="bg-gray-100 dark:bg-gray-900   w-96 h-96 flex items-center text-sm text-gray-800 dark:text-indigo-200 justify-center  ">
          <span>
            {buttonClassName.trim("") !== "" ? "." + buttonClassName : "button"}{" "}
            {"{"} {styleElements}
            {"}"}
          </span>
        </div>
        <button className="  w-96 dark:bg-indigo-700 h-24 dark:text-indigo-100">
          Copy to clipboard
        </button>
      </div>
    </React.Fragment>
  );
};

export default CodeWindow;
