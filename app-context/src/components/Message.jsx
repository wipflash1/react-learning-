import { useContext } from "react";
import { ToDoItemsContext } from "../store/todo-item-store";

const Message = () => {
  const contextObj = useContext(ToDoItemsContext);
  const todoItems = contextObjs.todoItems;
  return <>{todoItems.length === 0 && <p>Enjoy your Day</p>}</>;
};
export default Message;
