import { useContext } from "react";
import { ToDoItemsContext } from "../store/todo-items-store";

const Message = () => {
  const { todoItems } = useContext(ToDoItemsContext);
  return todoItems.length === 0 && <p>Enjoy your day </p>;
};
export default Message;
