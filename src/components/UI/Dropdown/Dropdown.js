const Dropdown = (props) => {
  const options = props.options.map((option) => {
    return <option value={option}>{option}</option>;
  });
  return (
    <select
      className="space-x-2 my-2"
      onChange={(e) => {
        props.changeValue(e);
      }}
    >
      {options}
    </select>
  );
};

export default Dropdown;
