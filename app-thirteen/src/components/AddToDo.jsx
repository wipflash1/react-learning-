import { useContext, useRef } from "react";
import { ToDoItemContext } from "../store/todo-item-store";

const AddToDo = () => {
  const constextObj = useContext(ToDoItemContext);
  const addItem = constextObj.addItem;
  const todoItemsElement = useRef();
  const todoDateElement = useRef();

  const handleAddItem = (event) => {
    event.preventDefault(); /*  This is must when using the form  */
    const todoName = todoItemsElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoItemsElement.current.value = "";
    todoDateElement.current.value = "";
    addItem(todoName, todoDate);

    console.log(`items added are Name:${todoName} Date:${todoDate}`);
  };
  return (
    <div classNameName="container text-center">
      <form classNameName="row align-items-start" onSubmit={handleAddItem}>
        <div classNameName="col">
          <input
            type="text"
            placeholder="Enter your task"
            ref={todoItemsElement}
          />
        </div>
        <div classNameName="col">
          <input type="date" ref={todoDateElement} />
        </div>
        <div classNameName="col">
          <button type="submit" classNameName="btn btn-success">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddToDo;
