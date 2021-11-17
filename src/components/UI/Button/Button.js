const Button = (props) => {
  return (
    <button
      className={props.bg ? props.bg : "bg-indigo-500"}
      onClick={props.onClick}
    >
      {props.text ? props.text : "Button"}
    </button>
  );
};

export default Button;
