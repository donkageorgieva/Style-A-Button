import { useSelector } from "react-redux";
import { useEffect } from "react";
const PreviewWindow = (props) => {
  const chosenStyles = useSelector((state) => state.reducer.options);
  const buttonStyles = {};

  chosenStyles.forEach((style) => {
    if (
      style.cssName === undefined ||
      style.value === 0 ||
      style.value.length <= 0
    ) {
      return;
    } else {
      if (Array.isArray(style.cssName)) {
        style.cssName.forEach((styleVariant) => {
          buttonStyles[styleVariant] = `${style.value}${
            style.unit ? style.unit : null
          }`;
        });
      } else {
        buttonStyles[style.cssName] = `${style.value}${
          style.unit === "px" ? style.unit : ""
        }`;
      }
    }
  });

  console.log(buttonStyles);
  return (
    <div className="dark:bg-indigo-900 p-4 transition duration-400 ease-in-out">
      <button style={buttonStyles}>Hello</button>
    </div>
  );
};

export default PreviewWindow;
