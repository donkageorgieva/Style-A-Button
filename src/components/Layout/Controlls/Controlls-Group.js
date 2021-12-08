import React, { useEffect } from "react";
import { useRef } from "react";
import Button from "../../UI/Button/Button";
import Control from "./Control/Control";
import { useSelector, useDispatch } from "react-redux";
import { buttonStyleActions } from "../../../store/button-styles";
const Controlls = () => {
  const controlOptions = useSelector((state) => state.reducer.options);
  const mode = useSelector((state) => state.reducer.mode);
  const dispatch = useDispatch();
  const controlElements = controlOptions.map((option) => {
    if (mode !== "style" && option.name === "Button class") {
      return;
    }
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
  const buttonStylesHandler = (e) => {
    dispatch(
      buttonStyleActions.changeMode({
        mode: "style",
      })
    );
  };
  const hoverStylesHandler = (e) => {
    dispatch(
      buttonStyleActions.changeMode({
        mode: "hover",
      })
    );
  };

  return (
    <div className=" lg:w-7/12  w-full bg-gray-100 dark:bg-gray-900 lg:h-screen   ">
      <div className="flex w-100">
        <Button
          otherClasses={["flex-grow ", mode === "style" ? "active" : ""].join(
            " "
          )}
          text="Button styles"
          onClick={buttonStylesHandler}
        />
        <Button
          otherClasses={["flex-grow", mode !== "style" ? "active" : ""].join(
            " "
          )}
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
