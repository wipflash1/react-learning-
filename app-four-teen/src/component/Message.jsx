import { useContext } from "react";
import { ToDoItemContext } from "../store/todo-item-store";

const Message = () => {
  const contextObj = useContext(ToDoItemContext);
  const todoItems = contextObj.todoItems;
  return todoItems.length === 0 && <p> Welconme to the App</p>;
};
export default Message;
