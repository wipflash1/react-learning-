import { useContext } from "react";
import { ToDoItemContext } from "../store/todo-item-store";

const Items = ({ todoName, todoDate }) => {
  const { deleteItem } = useContext(ToDoItemContext);
  return (
    <div className="container text-center">
      <div className="row align-items-center">
        <div className="col">{todoName}</div>
        <div className="col">{todoDate}</div>
        <div className="col">
          <button
            type="button"
            className="btn btn-danger"
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
