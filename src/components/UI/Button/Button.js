import { forwardRef } from "react";

const Button = forwardRef((props, ref) => {
  return (
    <button
      className={
        props.classes
          ? props.classes
          : [
              `px-4 py-2 dark:bg-indigo-700 bg-indigo-400 dark:hover:bg-indigo-500   transition duration-400 ease-in-out text-white dark:text-indigo-100  ${props.otherClasses}`,
            ].join("")
      }
      onClick={props.onClick}
      ref={ref}
    >
      {props.text ? props.text : "Button"}
    </button>
  );
});

export default Button;
