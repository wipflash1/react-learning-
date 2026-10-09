import { createContext } from "react";

export const ToDoItemsContext = createContext({
  todoItem: [],
  addItem: () => {},
  deleteItem: () => {},
});
