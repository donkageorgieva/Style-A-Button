import useButtonStyles from "../../../hooks/useButtonStyles";
import { useSelector } from "react-redux";
const PreviewWindow = (props) => {
  const buttonStyles = useButtonStyles();
  const buttonText = useSelector((state) =>
    state.reducer.options.find(
      (option) => option.name.trim() === "Button text".trim()
    )
  );
  return (
    <div className="dark:bg-indigo-900 p-4">
      <button style={buttonStyles}>{buttonText.value}</button>
    </div>
  );
};

export default PreviewWindow;
