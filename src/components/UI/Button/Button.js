import { forwardRef } from "react";

const Button = forwardRef((props, ref) => {
  return (
    <button
      className={
        props.classes
          ? props.classes
          : [
              `px-4 py-2 dark:bg-gray-700 dark:hover:bg-indigo-500   transition duration-400 ease-in-out dark:text-indigo-100 dark:focus:bg-indigo-500 ${props.otherClasses}`,
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
