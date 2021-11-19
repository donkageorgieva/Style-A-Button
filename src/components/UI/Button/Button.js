const Button = (props) => {
  return (
    <button
      className={
        props.classes
          ? props.classes
          : [
              `px-4 py-2 dark:bg-gray-700 dark:hover:bg-indigo-500 dark:text-indigo-100 dark:focus:bg-indigo-500 ${props.otherClasses}`,
            ].join("")
      }
      onClick={props.onClick}
    >
      {props.text ? props.text : "Button"}
    </button>
  );
};

export default Button;
