import { useRef, useState } from "react";

const AddToDo = ({ onAddNewItem }) => {
  //Defining local state for newItem
  // const [todoItem, settodoItem] = useState();

  //defining local state of Date, but np required when useRef is used
  // const [todoDate, settodoDate] = useState();

  //Now usinf ref ,so as to we just get the value from both inputs and need not to paint the whole UI unneccessarily]

  //ref for Items Name
  const todoNameElement = useRef();

  // ref for dueDate
  const todoDateElement = useRef();

  /*//Handling Item onChange
  const handleNewItemAdded = (event) => {
    settodoItem(event.target.value);
  };

  //Handling Date onChanage
  const handleNewDateAdded = (event) => {
    settodoDate(event.target.value);
  };*/

  //handling on click event and on submit form
  const handleNewItemClicked = (event) => {
    event.preventDefault();
    const todoItem = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    console.log(` Name :${todoItem} Date: ${todoDate}`);
    onAddNewItem(todoItem, todoDate);
    // settodoItem("");
    // settodoDate("");
  };
  return (
    <>
      <div classNameName="container text-center">
        <form
          classNameName="row align-items-start"
          onSubmit={handleNewItemClicked}
        >
          <div classNameName="col">
            <input
              type="text"
              ref={todoNameElement}
              placeholder="Enter task for the day"
              // onChange={handleNewItemAdded}
              // value={todoItem}
            ></input>
          </div>
          <div classNameName="col">
            <input
              type="date"
              ref={todoDateElement}
              // onChange={handleNewDateAdded}
              // value={todoDate}
            ></input>
          </div>
          <div classNameName="col">
            <button type="submit" classNameName="btn btn-success">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddToDo;
