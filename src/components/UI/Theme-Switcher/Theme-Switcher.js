import React from "react";

const ThemeSwitcher = (props) => {
  return (
    <div
      className="inline-flex space-x-2  items-center cursor-pointer  "
      onClick={props.toggleMode}
    >
      <label for="themeSwitcher">
        {" "}
        <span
          className={[
            `text-sm text-gray-800  dark:text-indigo-400 transition duration-400 ease-in-out `,
          ].join(" ")}
        >
          Light
        </span>
      </label>

      <input
        type="checkbox"
        name="themeSwitcher"
        id="toggle"
        className="hidden "
      />
      <div
        className={[
          `w-9 h-5 flex items-center   bg-gray-300 dark:bg-indigo-500 rounded-full p-1  transition duration-400 ease-in-out ${
            props.dark ? "justify-end" : "justify-start"
          }`,
        ].join(" ")}
      >
        <div className="w-4 h-4 rounded-full bg-white shadow-md "> </div>
      </div>
      <label for="themeSwitcher">
        {" "}
        <span
          className={[
            `text-sm dark:text-indigo-100  text-gray-400 dark:font-bold transition duration-400 ease-in-out `,
          ].join(" ")}
        >
          Dark
        </span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
