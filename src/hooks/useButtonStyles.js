const useButtonStyles = (chosenStyles, hover = false) => {
  const styleObjectHandler = (style) => {
    let styleVal = !hover ? style.value : style.hoverValue;

    if (style.cssName === undefined || styleVal === 0 || styleVal.length <= 0) {
      return;
    } else {
      if (Array.isArray(style.cssName)) {
        style.cssName.forEach((styleVariant) => {
          buttonStyles[styleVariant] = `${styleVal}${
            style.unit ? style.unit : null
          }`;
        });
      } else {
        if (Array.isArray(styleVal) && Array.isArray(style.unit)) {
          let mergedValues = [];
          styleVal.forEach((value, valueIndex) => {
            if (
              style.unit[valueIndex] === value ||
              style.unit[valueIndex] === "color"
            ) {
              mergedValues[valueIndex] = value;
            } else {
              mergedValues[valueIndex] = value + style.unit[valueIndex];
            }
          });

          buttonStyles[style.cssName] = mergedValues.join(" ");
        } else {
          buttonStyles[style.cssName] = `${styleVal}${
            style.unit === "px" ? style.unit : ""
          }`;
        }
      }
    }
  };
  const buttonStyles = {};
  if (Array.isArray(chosenStyles)) {
    chosenStyles.forEach((style) => {
      styleObjectHandler(style);
    });
  }
  styleObjectHandler(chosenStyles);

  return buttonStyles;
};

export default useButtonStyles;
