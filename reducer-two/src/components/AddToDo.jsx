import { useContext } from "react";
import { ToDoItemsContext } from "../store/todo-items-store";
import { useRef } from "react";

const AddToDo = () => {
  const { addItems } = useContext(ToDoItemsContext);

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddItem = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;

    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    addItems(todoName, todoDate);
    console.log(`items added are  Name:${todoName} Date:${todoDate}`);
  };
  return (
    <div className="container text-center">
      <div className="row align-items-center">
        <div className="col">
          <input
            type="text"
            placeholder="Enter task here..."
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
