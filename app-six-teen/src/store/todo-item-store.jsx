import { createContext } from "react";

export const ToDoItemContext = createContext({
  todoItems: [],
  addItem: () => {},
  deleteItem: () => {},
});
