import { useContext } from "react";
import Items from "./Items";
import { ToDoItemsContext } from "../store/todo-item-store";
const ToDoItems = () => {
  const contextObj = useContext(ToDoItemsContext);
  const todoItems = contextObj.todoItems;

  return (
    <>
      {todoItems.map((items) => (
        <Items
          todoItems={todoItems}
          todoName={items.name}
          todoDate={items.dueDate}
        ></Items>
      ))}
    </>
  );
};
export default ToDoItems;
