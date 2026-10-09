import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddToDo from "./components/AddToDoItems";
import ToDoItems from "./components/ToDoItems";
import Message from "./components/Message";
import { ToDoItemContext } from "./store/todo-item-store";
import { useReducer } from "react";

/* Reducer function is pure function so define it outside */
const todoItemsReducer = (currTodoItems, action) => {
  let newItem = currTodoItems;
  if (action.type == "NEW_ITEM") {
    newItem = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDate },
    ];
  } else if (action.type == "DELETE_ITEM") {
    newItem = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName,
    );
  }

  return newItem;
};

function App() {
  /*  const [todoItems, setToDoItems] = useState([
    {
      name: "Test ",
      dueDate: "1/1/2026",
    },
  ]); */

  const [todoItems, dispatchToDoItems] = useReducer(todoItemsReducer, []);

  /* Add functionality by dispatching and reducer methods */
  const addItem = (itemName, itemDate) => {
    /* defining the object the action for add */
    const newItemAction = {
      type: "NEW_ITEM",
      payload: { itemName, itemDate },
    };
    dispatchToDoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    /* defining the delete action object */
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: { itemName: todoItemName },
    };
    dispatchToDoItems(deleteItemAction);
    console.log(`items deleted`);
  };
  return (
    <>
      <ToDoItemContext.Provider value={{ todoItems, addItem, deleteItem }}>
        <center>
          <div>
            <h1>App ToDo</h1>
          </div>
          <AddToDo />
          <Message />
          <ToDoItems></ToDoItems>
        </center>
      </ToDoItemContext.Provider>
    </>
  );
}

export default App;
