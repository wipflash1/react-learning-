import { useContext } from "react";
import { ToDoItemContext } from "../store/todo-item-store";

const Message = () => {
  /*   const contextObj = useContext(ToDoItemContext);
  const todoItems = contextObj.todoItems; */

  const { todoItems } = useContext(ToDoItemContext);

  return todoItems.length === 0 && <p>Enjoy your day </p>;
};
export default Message;
