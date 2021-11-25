const Dropdown = (props) => {
  const options = props.options.map((option) => {
    return <option value={option}>{option}</option>;
  });
  return <select onChange={props.changeValue}>{options}</select>;
};

export default Dropdown;
