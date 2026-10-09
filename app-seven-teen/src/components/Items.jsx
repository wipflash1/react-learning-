import { useContext } from "react";
import { ToDoItemsContext } from "../store/ToDo-Items-store";

const Items = ({ todoName, todoDate }) => {
  const contextObj = useContext(ToDoItemsContext);
  const deleteItem = contextObj.deleteItem;
  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col">{todoName}</div>
        <div className="col">{todoDate}</div>
        <div className="col">
          <button
            type="button "
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
