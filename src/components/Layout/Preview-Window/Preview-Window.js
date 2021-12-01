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
  return (
    <div className="dark:bg-indigo-900 p-4 w-1/4  h-80 flex justify-center items-center overflow-hidden">
      <div>
        <button style={buttonStyles}>{buttonText.value}</button>
      </div>
    </div>
  );
};

export default PreviewWindow;
