/* eslint-disable default-case */
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "style",
  options: [
    {
      name: "Background color",
      value: 0,
      cssName: "backgroundColor",
      unit: "px",
    },
    { name: "Color", value: 0, cssName: "color", unit: "" },
    { name: "Font", value: "", cssName: "fontFamily" },
    { name: "Font size", value: 0, cssName: "fontSize", unit: "px" },
    { name: "Font weight", value: 0, cssName: "fontWeight" },
    { name: "Horizontal padding", value: 0, cssName: "padding", unit: "px" },
    { name: "Vertical padding", value: 0, cssName: "padding", unit: "px" },
    { name: "Border", value: 0, cssName: "border", unit: "px" },
    { name: "Border radius", value: 0, cssName: "borderRadius", unit: "px" },
    { name: "Box shadow", value: 0, cssName: "boxShadow" },
    { name: "Text shadow", value: 0, cssName: "textShadow" },
    { name: "Button text", value: "Button text" },
    { name: "Button class", value: "" },
  ],
};

const buttonStyleSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    changeStyle(state, action) {
      switch (action.payload.name) {
        case "Horizontal padding":
          const currValue = state.options.find(
            (option) => option.name.trim() === action.payload.name.trim()
          );
          currValue.value = action.payload.value;
          break;
      }
    },
  },
});

const store = configureStore({
  reducer: buttonStyleSlice,
});

export const buttonStyleActions = buttonStyleSlice.actions;
export default store;
