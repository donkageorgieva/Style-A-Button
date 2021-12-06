import useButtonStyles from "../../../hooks/useButtonStyles";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useState } from "react";
import React from "react";
const CodeWindow = (props) => {
  const [textCopied, setTextCopied] = useState(false);
  const cssTextRef = useRef();
  const chosenStyles = useSelector((state) => state.reducer.options);
  const buttonStyles = useButtonStyles(chosenStyles);
  const buttonClassName = chosenStyles.find(
    (option) => option.name === "Button class"
  ).value;
  const copyToClipboardHandler = () => {
    setTextCopied(true);
    const content = cssTextRef.current.textContent;
    navigator.clipboard.writeText(content);
    setTimeout(() => {
      setTextCopied(false);
    }, 4000);
  };
  const styleElements = [];

  for (const key in buttonStyles) {
    const seperatedWords = key.split(/(?=[A-Z])/);
    seperatedWords.forEach((word, index) => {
      seperatedWords[index] = word.toLowerCase();
    });
    const newCssName = seperatedWords.join("-");

    styleElements.push(
      `${newCssName}:  ${
        newCssName === "font-family"
          ? `"` + buttonStyles[key] + `"`
          : buttonStyles[key]
      }; ${"\n"}`
    );
  }

  return (
    <React.Fragment>
      <div className="lg:p-4 lg:m-4 md:p-2 w-screen lg:overflow-hidden ">
        <div className="bg-gray-100 dark:bg-gray-900 w-full lg:w-96  h-96 flex items-center text-sm text-gray-800 dark:text-indigo-200 justify-center ">
          <span
            style={{ whiteSpace: "pre" }}
            ref={cssTextRef}
            className="transition ease-in-out duration-400  flex justify-start items-center lg:px-8 md:px-4 lg:w-96 md:w-full  "
          >
            {buttonClassName.trim("") !== "" ? "." + buttonClassName : "button"}{" "}
            {"{\n"}
            {styleElements}
            {"}"}
          </span>
        </div>
        <button
          className={[
            "  lg:w-96 dark:bg-indigo-700 h-24 dark:text-indigo-100 transition duration-400 ease-in-out w-full",
            `${textCopied ? "active" : ""}`,
          ].join(" ")}
          onClick={copyToClipboardHandler}
        >
          {textCopied ? "Copied" : "Copy to clipboard"}
        </button>
      </div>
    </React.Fragment>
  );
};

export default CodeWindow;
