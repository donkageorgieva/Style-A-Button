import { useSelector } from "react-redux";
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
      buttonStyles[style.cssName] = `${style.value}${
        style.unit ? style.unit : null
      }`;
    }
  });
  return (
    <div className="dark:bg-indigo-900 p-4">
      <button style={buttonStyles}>Hello</button>
    </div>
  );
};

export default PreviewWindow;
