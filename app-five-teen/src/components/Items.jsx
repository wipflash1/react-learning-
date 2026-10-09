import { useContext } from "react";
import { ToDoItemContext } from "../store/todo-item-store";

const Items = ({ todoName, todoDate }) => {
  const contextObj = useContext(ToDoItemContext);
  const deleteItem = contextObj.deleteItem;
  return (
    <div classNameName="container text-center">
      <div classNameName="row align-items-start">
        <div classNameName="col">{todoName}</div>
        <div classNameName="col">{todoDate}</div>
        <div classNameName="col">
          <button
            type="button"
            classNameName="btn btn-danger"
            onClick={() => deleteItem(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default Items;
