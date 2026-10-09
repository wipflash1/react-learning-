import { useContext } from "react";
import Items from "./Items";
import { ToDoItemContext } from "../store/todo-item-store";
const ToDoItems = () => {
  const { todoItems } = useContext(ToDoItemContext);

  return (
    <>
      {todoItems.map((item) => (
        <Items
          key={item.id}
          todoName={item.name}
          todoDate={item.dueDate}
        ></Items>
      ))}
    </>
  );
};
export default ToDoItems;
