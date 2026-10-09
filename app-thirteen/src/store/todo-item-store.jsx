import { createContext } from "react";
import TodoItems from "../components/TodoItems";

export const ToDoItemContext = createContext({
  TodoItems: [],
  addItems: () => {},
  deleteItem: () => {},
});
