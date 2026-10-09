import { useContext } from "react";
import { ToDoItemContext } from "../store/todo-item-store";

const Message = () => {
  const { todoItems } = useContext(ToDoItemContext);

  return todoItems.length === 0 && <p>Welcome To The App</p>;
};
export default Message;
