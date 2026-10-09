import { useContext, useRef } from "react";
import { ToDoItemContext } from "../store/todo-item-store";

const AddToDo = () => {
  const { addItem } = useContext(ToDoItemContext);

  const todoItemNameElement = useRef();
  const todoItemDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoItemName = todoItemNameElement.current.value;
    const todoItemDate = todoItemDateElement.current.value;

    todoItemNameElement.current.value = "";
    todoItemDateElement.current.value = "";
    addItem(todoItemName, todoItemDate);
  };
  return (
    <div classNameName="container text-center">
      <div classNameName="row align-items-center">
        <div classNameName="col">
          <input
            type="text"
            placeholder="Enter task..."
            ref={todoItemNameElement}
          />
        </div>
        <div classNameName="col">
          <input type="date" ref={todoItemDateElement} />
        </div>
        <div classNameName="col">
          <button
            classNameName="btn btn-success"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddToDo;
