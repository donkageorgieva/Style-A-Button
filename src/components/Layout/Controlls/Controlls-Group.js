import React, { useEffect } from "react";
import { useRef } from "react";
import Button from "../../UI/Button/Button";
import Control from "./Control/Control";
const Controlls = () => {
  const buttonStylesHandler = () => {};
  const hoverStylesHandler = () => {};
  const mainButtonRef = useRef(null);
  useEffect(() => {
    mainButtonRef.current.focus();
  }, [mainButtonRef]);
  return (
    <div className=" w-1/5 bg-gray-100 dark:bg-gray-900 h-full">
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
      <div className="p-4 h-screen flex flex-col justify-center">
        <div className=" bg-gray-200 dark:bg-gray-800 p-4">
          <Control setting="padding" />
          <Control />
          <Control />
          <Control />
        </div>
      </div>
    </div>
  );
};

export default Controlls;
