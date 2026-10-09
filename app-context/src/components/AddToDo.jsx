import { useContext, useRef, useState } from "react";
import { ToDoItemsContext } from "../store/todo-item-store";

const AddToDo = () => {
  const contextObj = useContext(ToDoItemsContext);
  const addItem = contextObj.addItem;

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddItemClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    addItem(todoName, todoDate);
  };

  return (
    <div classNameName="container text-center">
      <form
        classNameName="row align-items-start"
        onSubmit={handleAddItemClicked}
      >
        <div classNameName="col">
          <input type="text " placeholder="Enter Task" ref={todoNameElement} />
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
