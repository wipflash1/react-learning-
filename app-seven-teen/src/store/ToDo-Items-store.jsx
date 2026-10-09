import { createContext } from "react";

export const ToDoItemsContext = createContext({
  todoItems: [],
  addItem: () => {},
  deleteItem: () => {},
});
