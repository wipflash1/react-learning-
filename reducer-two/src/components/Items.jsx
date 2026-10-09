import { useContext } from "react";
import { ToDoItemsContext } from "../store/todo-items-store";

const Items = ({ todoName, todoDate }) => {
  const { deleteItems } = useContext(ToDoItemsContext);
  return (
    <div className="container text-center">
      <div className="row align-items-center">
        <div className="col">{todoName}</div>
        <div className="col">{todoDate}</div>
        <div className="col">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteItems(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default Items;
