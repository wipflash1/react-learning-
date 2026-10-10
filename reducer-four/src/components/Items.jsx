import { useContext } from "react";
import { ToDoItemsContext } from "../store/todo-items-store";

const Items = ({ todoId, todoName, todoDate }) => {
  const { deleteItems, toggleItem } = useContext(ToDoItemsContext);
  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col">{todoName}</div>
        <div className="col">{todoDate}</div>
        <div className="col">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteItems(todoId)}
          >
            Delete
          </button>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => toggleItem(todoId)}
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};
export default Items;
