const Slider = (props) => {
  return (
    <label>
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={props.changeValue}
        step="1"
      />
    </label>
  );
};

export default Slider;
