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
    <div className=" lg:w-7/12  w-full bg-gray-100 dark:bg-gray-900 lg:h-screen   ">
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

      <div className=" flex flex-wrap lg:flex-col lg:flex-nowrap bg-gray-200 dark:bg-gray-800 m-4 p-4 lg:h-screen">
        {controlElements}
      </div>
    </div>
  );
};

export default Controlls;
