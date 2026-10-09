import { useContext } from "react";
import { ToDoItemContext } from "../store/todo-item-store";
import { useRef } from "react";

const AddToDo = () => {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddItem = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    addItem(todoName, todoDate);
  };
  const { addItem } = useContext(ToDoItemContext);
  return (
    <div className="container text-center">
      <div className="row align-items-center">
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
            onClick={handleAddItem}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddToDo;
