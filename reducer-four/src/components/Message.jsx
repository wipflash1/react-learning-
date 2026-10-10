import { useContext } from "react";
import { ToDoItemsContext } from "../store/todo-items-store";

const Message = () => {
  const { todoItems } = useContext(ToDoItemsContext);
  return todoItems.length === 0 && <p>Welcome to the App</p>;
};
export default Message;
