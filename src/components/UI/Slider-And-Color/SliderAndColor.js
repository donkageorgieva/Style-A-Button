import Slider from "../Range-Slider/Range-Slider";
import { useSelector } from "react-redux";
import useButtonStyles from "../../../hooks/useButtonStyles";
const SliderAndColor = (props) => {
  const currOption = useSelector((state) =>
    state.reducer.options.find((option) => option.name === props.setting)
  );
  const styles = useButtonStyles(currOption);
  console.log(styles);
  return (
    <div className="flex">
      <div className="h-4 w-4"></div>
    </div>
  );
};

export default SliderAndColor;
