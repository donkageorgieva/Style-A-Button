const Dropdown = (props) => {
  const options = props.options.map((option) => {
    return <option value={option}>{option}</option>;
  });
  return (
    <select
      className="space-x-2 my-2 drop-shadow-sm border-2  active:border-indigo-800 active:border-2-indigo"
      onChange={(e) => {
        props.changeValue(e);
      }}
      value={props.currValue}
    >
      {options}
    </select>
  );
};

export default Dropdown;
