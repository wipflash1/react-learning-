import { useContext, useRef, useState } from "react";
import { ToDoItemsContext } from "../store/ToDo-Items-store";

const AddToDo = () => {
  const contextObj = useContext(ToDoItemsContext);
  const addItem = contextObj.addItem;

  const todoNameElement = useRef("");
  const todoDateElement = useRef("");

  const handleAddButton = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    addItem(todoName, todoDate);
  };
  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col">
          <input type="text" placeholder="Enter Task.." ref={todoNameElement} />
        </div>
        <div className="col">
          <input type="date" ref={todoDateElement} />
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAddButton}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddToDo;
