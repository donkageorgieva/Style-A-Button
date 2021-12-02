import useButtonStyles from "../../../hooks/useButtonStyles";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
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

  console.log(styleElements);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-4 mx-4 w-1/4 min:h-80 flex items-center text-sm text-gray-800 dark:text-indigo-200 justify-center  ">
      <div>
        <span>
          {buttonClassName.trim("") !== "" ? "." + buttonClassName : "button"}{" "}
          {"{"} {styleElements}
          {"}"}
        </span>
      </div>
    </div>
  );
};

export default CodeWindow;
