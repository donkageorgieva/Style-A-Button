/* eslint-disable default-case */
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "style",
  options: [
    { name: "Background color", value: 0 },
    { name: "Color", value: 0 },
    { name: "Font", value: "" },
    { name: "Font size", value: 0 },
    { name: "Font weight", value: 0 },
    { name: "P-X", value: 0 },
    { name: "P-Y", value: 0 },
    { name: "Border", value: false },
    { name: "Border radius", value: 0 },
    { name: "Box shadow", value: 0 },
    { name: "Text shadow", value: 0 },
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
        case "P-X":
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
