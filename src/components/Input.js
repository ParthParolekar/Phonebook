const Input = (props) => {
  return (
    <div>
      {props.inputName}
      <input
        type={props.inputType}
        value={props.inputValue}
        onChange={props.inputHandler}
      />
    </div>
  );
};

export default Input;
