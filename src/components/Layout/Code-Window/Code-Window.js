import useButtonStyles from "../../../hooks/useButtonStyles";
import { useSelector } from "react-redux";
const CodeWindow = (props) => {
  const chosenStyles = useSelector((state) => state.reducer.options);
  const buttonStyles = useButtonStyles(chosenStyles);

  return (
    <div className="dark:bg-indigo-900 p-4">
      <p>
        button {"{"} <br /> background-color: #f4f4; <br />
        {"}"}
      </p>
    </div>
  );
};

export default CodeWindow;
