import { useContext } from "react";
import { ToDoItemsContext } from "../store/ToDo-Items-store";

const Message = () => {
  const contextObj = useContext(ToDoItemsContext);
  const todoItems = contextObj.todoItems;
  return <>{todoItems.length === 0 && <p>Welcome To The App</p>}</>;
};
export default Message;
