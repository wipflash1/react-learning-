import { useContext } from "react";
import Items from "./Items";
import { ToDoItemsContext } from "../store/todo-items-store";
const ToDoItems = () => {
  const { todoItems } = useContext(ToDoItemsContext);
  return (
    <>
      {todoItems.map((item) => (
        <Items
          key={item.id}
          todoId={item.id}
          todoName={item.name}
          todoDate={item.dueDate}
        ></Items>
      ))}
    </>
  );
};
export default ToDoItems;
