import { useContext } from "react";
import ToDoItems from "./ToDoItems";
import { ToDoItemContext } from "../store/todo-item-store";

const Message = () => {
  const contextObj = useContext(ToDoItemContext);
  const todoItems = contextObj.todoItems;
  return <>{todoItems.length === 0 && <p>Welcome to the club</p>}</>;
};
export default Message;
