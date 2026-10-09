import { createContext, useContext } from "react";

export const ToDoItemsContext = createContext({
  todoItems: [],
  addItem: () => {},
  deleteItem: () => {},
});
