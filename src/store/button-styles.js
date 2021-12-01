/* eslint-disable default-case */
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "style",
  options: [
    {
      name: "Background color",
      value: "#C63CD2",
      cssName: "backgroundColor",
      unit: "color",
      element: {
        color: true,
        slider: false,
        input: false,
        dropdown: false,
      },
    },
    {
      name: "Color",
      value: "#FFFFFF",
      cssName: "color",
      unit: "color",
      element: {
        color: true,
        slider: false,
        input: false,
        dropdown: false,
      },
    },
    {
      name: "Font",
      value: "Roboto",
      cssName: "fontFamily",
      unit: ["Roboto", "Montserrat"],
      element: {
        color: false,
        slider: false,
        input: false,
        dropdown: true,
      },
    },
    {
      name: "Font size",
      value: 16,
      cssName: "fontSize",
      unit: "px",
      element: {
        color: false,
        slider: true,
        input: false,
        dropdown: false,
      },
    },
    {
      name: "Font weight",
      value: 400,
      cssName: "fontWeight",
      unit: [100, 300, 400, 500],
      element: {
        color: false,
        slider: false,
        input: false,
        dropdown: true,
      },
    },
    {
      name: "Horizontal padding",
      value: 25,
      cssName: ["paddingRight", "paddingLeft"],
      unit: "px",
      element: {
        color: false,
        slider: true,
        input: false,
        dropdown: false,
      },
    },
    {
      name: "Vertical padding",
      value: 5,
      cssName: ["paddingTop", "paddingBottom"],
      unit: "px",
      element: {
        color: false,
        slider: true,
        input: false,
        dropdown: false,
      },
    },
    {
      name: "Border",
      value: [0, "solid", "#f6f6f6"],
      cssName: "border",
      unit: ["px", "solid", "color"],
      element: {
        color: true,
        slider: true,
        input: false,
        dropdown: false,
      },
    },
    {
      name: "Border radius",
      value: 0,
      cssName: "borderRadius",
      unit: "px",
      element: {
        color: false,
        slider: true,
        input: false,
        dropdown: false,
      },
    },
    {
      name: "Box shadow",
      value: [0, 0, 0, "#242427"],
      cssName: "boxShadow",
      element: {
        color: true,
        slider: true,
        input: false,
        dropdown: false,
      },
      unit: ["px", "px", "px", "color"],
    },
    {
      name: "Text shadow",
      value: [0, 0, 0, "#f4f4f4"],
      cssName: "textShadow",
      element: {
        color: true,
        slider: true,
        input: false,
        dropdown: false,
      },
    },
    {
      name: "Button text",
      value: "Button text",
      element: {
        color: false,
        slider: false,
        input: true,
        dropdown: false,
      },
    },
    {
      name: "Button class",
      value: "",
      element: {
        color: false,
        slider: false,
        input: true,
        dropdown: false,
      },
    },
  ],
};

const buttonStyleSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    changeStyle(state, action) {
      const currValue = state.options.find(
        (option) => option.name.trim() === action.payload.name.trim()
      );
      switch (action.payload.type) {
        case "SINGLE_VALUE":
          currValue.value = action.payload.value;
          break;
        case "MULTIPLE_VALUES":
          if (action.payload.value <= 0) {
            currValue.value[action.payload.index] = 0;
          }
          currValue.value[action.payload.index] = action.payload.value;
          break;
        default:
          return state;
      }
    },
  },
});

const store = configureStore({
  reducer: buttonStyleSlice,
});

export const buttonStyleActions = buttonStyleSlice.actions;
export default store;
