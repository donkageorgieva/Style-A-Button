import React from "react";

const ThemeSwitcher = (props) => {
  return (
    <div className="flex space-x-2 cursor-pointer" onClick={props.toggleMode}>
      <label for="themeSwitcher">
        {" "}
        <span className="text-sm text-gray-800  dark:text-gray-400">Light</span>
      </label>

      <input
        type="checkbox"
        name="themeSwitcher"
        id="toggle"
        className="hidden "
      />
      <div className="w-9 h-5 flex items-center bg-gray-300 dark:bg-indigo-500 rounded-full p-1">
        <div className="w-4 h-4 rounded-full bg-white shadow-md"> </div>
      </div>
      <label for="themeSwitcher">
        {" "}
        <span className="text-sm dark:text-white  text-gray-400">Dark</span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
