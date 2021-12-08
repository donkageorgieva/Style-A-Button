/* eslint-disable default-case */
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "style",
  options: [
    {
      name: "Background color",
      value: "#C63CD2",
      hoverValue: "#E02FA6",
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
      hoverValue: "#FFFFFF",
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
      hoverValue: "Roboto",
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
      hoverValue: 16,
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
      hoverValue: 400,
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
      value: 30,
      hoverValue: 40,
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
      value: 10,
      hoverValue: 20,
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
      hoverValue: [0, "solid", "#f6f6f6"],
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
      hoverValue: 10,
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
      hoverValue: [0, 0, 0, "#242427"],
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
      value: [0, 0, 0, "#242427"],
      hoverValue: [0, 0, 0, "#242427"],
      cssName: "textShadow",
      element: {
        color: true,
        slider: true,
        input: false,
        dropdown: false,
      },
      unit: ["px", "px", "px", "color"],
    },
    {
      name: "Button text",
      value: "Button text",
      hoverValue: "Button text",
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
      hoverValue: "",
      element: {
        color: false,
        slider: false,
        input: true,
        dropdown: false,
      },
    },
    {
      name: "Transition",
      value: "0.4s ease-in-out",
      hoverValue: "0.4s ease-in-out",
      cssName: "transition",
      unit: ["0.4s ease-in-out", "0.4s ease-in", "0.4s ease"],
      element: {
        color: false,
        slider: false,
        input: false,
        dropdown: true,
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
      const changeVlues = (type, value, index, hover = false) => {
        switch (action.payload.type) {
          case "SINGLE_VALUE":
            if (!hover) {
              currValue.value = action.payload.value;
            } else {
              currValue.hoverValue = action.payload.value;
            }

            break;
          case "MULTIPLE_VALUES":
            if (!hover) {
              if (action.payload.value <= 0) {
                currValue.value[action.payload.index] = 0;
              }
              currValue.value[action.payload.index] = action.payload.value;
            } else {
              if (action.payload.value <= 0) {
                currValue.hoverValue[action.payload.index] = 0;
              }
              currValue.hoverValue[action.payload.index] = action.payload.value;
            }

            break;
          default:
            return state;
        }
      };
      switch (action.payload.mode) {
        case "style":
          changeVlues(
            action.payload.value,
            action.payload.type,
            action.payload.index
          );
          break;
        case "hover":
          changeVlues(
            action.payload.value,
            action.payload.type,
            action.payload.index,
            true
          );
          break;
      }
    },
    changeMode(state, action) {
      state.mode = action.payload.mode;
    },
  },
});

const store = configureStore({
  reducer: buttonStyleSlice,
});

export const buttonStyleActions = buttonStyleSlice.actions;
export default store;
