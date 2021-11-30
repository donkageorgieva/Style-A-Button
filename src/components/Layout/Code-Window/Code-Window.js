import useButtonStyles from "../../../hooks/useButtonStyles";
import { useSelector } from "react-redux";
const CodeWindow = (props) => {
  const chosenStyles = useSelector((state) => state.reducer.options);
  const buttonStyles = useButtonStyles(chosenStyles);
  console.log("styles are", buttonStyles);
  return <div className="dark:bg-indigo-900 p-4"></div>;
};

export default CodeWindow;
