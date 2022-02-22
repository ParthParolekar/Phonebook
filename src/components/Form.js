import Input from "./Input";

const Form = (props) => {
  return (
    <form onSubmit={props.addName}>
      <div>
        <Input
          inputName="Name:"
          inputType="text"
          inputValue={props.newName}
          inputHandler={props.nameChangeHandler}
        ></Input>
        <Input
          inputName="Number:"
          inputType="number"
          inputValue={props.newNumber}
          inputHandler={props.numberChangeHandler}
        ></Input>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
