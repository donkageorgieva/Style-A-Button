import useButtonStyles from "../../../hooks/useButtonStyles";
const PreviewWindow = (props) => {
  const buttonStyles = useButtonStyles();

  console.log(buttonStyles);
  return (
    <div className="dark:bg-indigo-900 p-4">
      <button style={buttonStyles}>Hello</button>
    </div>
  );
};

export default PreviewWindow;
