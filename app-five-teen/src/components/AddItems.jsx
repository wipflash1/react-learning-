import { useContext, useRef } from "react";
import { ToDoItemContext } from "../store/todo-item-store";

const AddItems = () => {
  const contextObj = useContext(ToDoItemContext);
  const addItems = contextObj.addItems;

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddItemClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    addItems(todoName, todoDate);
  };
  return (
    <div classNameName="container text-center">
      <div classNameName="row align-items-start">
        <div classNameName="col">
          <input
            type="text"
            placeholder="Enter the task"
            ref={todoNameElement}
          />
        </div>
        <div classNameName="col">
          <input type="date" ref={todoDateElement} />
        </div>
        <div classNameName="col">
          <button
            type="button"
            classNameName="btn btn-success"
            onClick={handleAddItemClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddItems;
