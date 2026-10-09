import { useContext } from "react";
import Items from "./Items";
import { ToDoItemContext } from "../store/todo-item-store";
const TodoItems = () => {
  const { todoItems } = useContext(ToDoItemContext);
  return (
    <>
      {todoItems.map((items) => (
        <Items todoName={items.name} todoDate={items.dueDate}></Items>
      ))}
    </>
  );
};
export default TodoItems;
