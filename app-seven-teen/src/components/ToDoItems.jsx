import { useContext } from "react";
import Items from "./Items";
import { ToDoItemsContext } from "../store/ToDo-Items-store";
const ToDoItems = () => {
  const contextObj = useContext(ToDoItemsContext);
  const todoItems = contextObj.todoItems;

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
