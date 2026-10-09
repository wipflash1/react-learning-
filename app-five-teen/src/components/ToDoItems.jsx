import { useContext } from "react";
import Items from "./Items";
import { ToDoItemContext } from "../store/todo-item-store";
const ToDoItems = () => {
  const { todoItems } = useContext(ToDoItemContext);
  return (
    <>
      {todoItems.map((items) => (
        <Items
          key={items.id}
          todoName={items.name}
          todoDate={items.dueDate}
        ></Items>
      ))}
    </>
  );
};
export default ToDoItems;
