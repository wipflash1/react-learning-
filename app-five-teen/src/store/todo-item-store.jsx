import { createContext } from "react";
import ToDoItems from "../components/ToDoItems";

/* export const ToDoItemContext = (createContext = {
  todoItems: [],
  addItem: () => {},
  deleteItem: () => {},
}); */

export const ToDoItemContext = createContext({
  ToDoItems: [],
  addItems: () => {},
  deleteItem: () => {},
});
