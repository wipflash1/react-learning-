import { createContext } from "react";

export const ToDoItemsContext = createContext({
  todoItems: [],
  addItems: () => {},
  deleteItems: () => {},
  toggleItem: () => {},
});
