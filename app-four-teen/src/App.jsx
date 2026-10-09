import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddToDo from "./component/AddToDo";
import ToDoItems from "./component/ToDoItems";
import { ToDoItemContext } from "./store/todo-item-store";
import Message from "./component/Message";

function App() {
  const [todoItems, setToDoItems] = useState([]);

  /*Adding Functionality */
  const addItem = (itemName, itemDate) => {
    setToDoItems((currValue) => [
      ...currValue,
      { id: crypto.randomUUID(), name: itemName, dueDate: itemDate },
    ]);
  };

  /* Delete functionality */
  const deleteItem = (itemName) => {
    const newItem = todoItems.filter((item) => item.name !== itemName);
    setToDoItems(newItem);
  };

  return (
    <>
      <center>
        <ToDoItemContext.Provider
          value={{
            todoItems,
            addItem,
            deleteItem,
          }}
        >
          <div>
            <h1>ToDo App </h1>
          </div>
          <AddToDo></AddToDo>
          <Message></Message>
          <ToDoItems></ToDoItems>
        </ToDoItemContext.Provider>
      </center>
    </>
  );
}

export default App;
