import { TodoItemsContext } from "../store/todo-items-store";
import Items from "./Items";
import { useContext } from "react";

const ToDoItems = ({ onDeleteItemClicked }) => {
  /*   const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
 */
  /* By destructing */

  const { todoItems, deleteItem } = useContext(TodoItemsContext);
  console.log(TodoItemsContext);

  return (
    <>
      {todoItems.map((items) => (
        <Items
          key={items}
          todoName={items.name}
          todoDate={items.dueDate}
          ItemDeletedClicked={deleteItem}
        ></Items>
      ))}
    </>
  );
};
export default ToDoItems;
