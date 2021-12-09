import useButtonStyles from "../../../hooks/useButtonStyles";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useState } from "react";
import React from "react";
const CodeWindow = (props) => {
  const [textCopied, setTextCopied] = useState(false);
  const cssTextRef = useRef();
  const chosenStyles = useSelector((state) => state.reducer.options);
  const mode = useSelector((state) =>
    state.reducer.mode === "hover" ? true : false
  );

  const buttonStyles = useButtonStyles(chosenStyles, mode);
  const buttonClassName = chosenStyles.find(
    (option) => option.name === "Button class"
  ).value;
  const cssTag =
    buttonClassName.trim("") !== "" ? "." + buttonClassName : "button";
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
      <div className=" lg:p-4 lg:m-4 w-screen flex flex-col">
        <div className="bg-white dark:bg-gray-900  lg:w-96 w-full py-8 lg:h-96 flex items-center text-sm text-gray-800 dark:text-indigo-200 justify-center order-last lg:order-none">
          <span
            style={{ whiteSpace: "pre" }}
            ref={cssTextRef}
            className="transition ease-in-out duration-400  flex justify-start items-center lg:mx-8 md:mx-4   "
          >
            {!mode ? cssTag : cssTag + ":hover"} {"{\n"}
            {styleElements}
            {"}"}
          </span>
        </div>
        <button
          className={[
            "   bg-indigo-700 h-24  text-indigo-100 transition duration-400 ease-in-out w-full   lg:w-96  shadow-md",
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
