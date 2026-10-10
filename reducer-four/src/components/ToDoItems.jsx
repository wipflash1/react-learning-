import { useContext } from "react";
import Items from "./Items";
import { ToDoItemsContext } from "../store/todo-items-store";
const ToDoItems = () => {
  const { todoItems } = useContext(ToDoItemsContext);
  return (
    <>
      {todoItems.map((items) => (
        <Items
          key={items.id}
          todoId={items.id}
          todoName={items.name}
          todoDate={items.dueDate}
        ></Items>
      ))}
    </>
  );
};
export default ToDoItems;
