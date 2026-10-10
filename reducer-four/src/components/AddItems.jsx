import { useContext, useRef } from "react";
import { ToDoItemsContext } from "../store/todo-items-store";

const AddItems = () => {
  const { addItems } = useContext(ToDoItemsContext);
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value.trim();
    const todoDate = todoDateElement.current.value;
    if (!todoName) return;

    addItems(todoName.trim(), todoDate);

    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
  };
  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col">
          <input
            type="text"
            placeholder="Enter task..."
            ref={todoNameElement}
          />
        </div>
        <div className="col">
          <input type="date" ref={todoDateElement} />
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddItems;
