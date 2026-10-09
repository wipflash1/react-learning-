import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const Message = () => {
  /*  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems; */

  /*  by destructuring  */
  const { todoItems } = useContext(TodoItemsContext);
  return <>{todoItems.length === 0 && <p> Enjoy your day </p>}</>;
};
export default Message;
