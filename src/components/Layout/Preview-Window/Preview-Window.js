import useButtonStyles from "../../../hooks/useButtonStyles";
import { useSelector } from "react-redux";
const PreviewWindow = (props) => {
  const chosenStyles = useSelector((state) => state.reducer.options);
  const buttonStyles = useButtonStyles(chosenStyles);
  const buttonText = useSelector((state) =>
    state.reducer.options.find(
      (option) => option.name.trim() === "Button text".trim()
    )
  );
  console.log(buttonStyles);
  return (
    <div className="dark:bg-indigo-900 p-4">
      <button style={buttonStyles}>{buttonText.value}</button>
    </div>
  );
};

export default PreviewWindow;
