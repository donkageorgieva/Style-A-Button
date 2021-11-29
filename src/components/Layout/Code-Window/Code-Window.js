import useButtonStyles from "../../../hooks/useButtonStyles";

const CodeWindow = (props) => {
  const buttonStyles = useButtonStyles();
  console.log(buttonStyles);
  return <div className="dark:bg-indigo-900 p-4"></div>;
};

export default CodeWindow;
