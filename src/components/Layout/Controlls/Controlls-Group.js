import React, { useEffect } from "react";
import { useRef } from "react";
import Button from "../../UI/Button/Button";
import Control from "./Control/Control";
import { useSelector } from "react-redux";
const Controlls = () => {
  const controlOptions = useSelector((state) => state.reducer.options);
  const controlElements = controlOptions.map((option) => {
    return (
      <Control
        setting={option.name}
        color={option.element.color && true}
        slider={option.element.slider && true}
        dropdown={option.element.dropdown && true}
        input={option.element.input && true}
        unit={option.unit}
      />
    );
  });
  const buttonStylesHandler = () => {};
  const hoverStylesHandler = () => {};
  const mainButtonRef = useRef(null);
  useEffect(() => {
    mainButtonRef.current.focus();
  }, [mainButtonRef]);
  return (
    <div className=" w-1/5 bg-gray-100 dark:bg-gray-900 min-h-screen ">
      <div className="flex w-100">
        <Button
          otherClasses="flex-grow"
          text="Button styles"
          ref={mainButtonRef}
          onClick={buttonStylesHandler}
        />
        <Button
          otherClasses="flex-grow"
          text="Hover styles"
          onClick={hoverStylesHandler}
        />
      </div>
      <div className="p-4  flex flex-col justify-center">
        <div className=" bg-gray-200 dark:bg-gray-800 p-4">
          {controlElements}
        </div>
      </div>
    </div>
  );
};

export default Controlls;
