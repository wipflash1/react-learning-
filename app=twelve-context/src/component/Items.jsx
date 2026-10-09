import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const Items = ({ todoName, todoDate, ItemDeletedClicked }) => {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <>
      <div classNameName="container text-center">
        <form classNameName="row align-items-start">
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
        </form>
      </div>
    </>
  );
};
export default Items;
