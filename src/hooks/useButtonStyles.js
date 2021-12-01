const useButtonStyles = (chosenStyles) => {
  const styleObjectHandler = (style) => {
    if (
      style.cssName === undefined ||
      style.value === 0 ||
      style.value.length <= 0
    ) {
      return;
    } else {
      if (Array.isArray(style.cssName)) {
        style.cssName.forEach((styleVariant) => {
          buttonStyles[styleVariant] = `${style.value}${
            style.unit ? style.unit : null
          }`;
        });
      } else {
        if (Array.isArray(style.value) && Array.isArray(style.unit)) {
          let mergedValues = [];
          style.value.forEach((value, valueIndex) => {
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
          buttonStyles[style.cssName] = `${style.value}${
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
