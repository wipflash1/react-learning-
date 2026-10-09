import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";
import { ToDoItemContext } from "./store/todo-item-store";
import Message from "./components/Message";

function App() {
  const [todoItems, setToDoItems] = useState([
    /*   { name: "Task 1", date: "2023-06-01" },
    { name: "Task 2", date: "2023-06-02" }, */
  ]);

  /* Add function */
  const addItem = (itemName, itemDate) => {
    /* Main logic in which we just add a new item to an array  */
    const newItem = [
      ...todoItems,
      { id: crypto.randomUUID(), name: itemName, date: itemDate },
    ];
    setToDoItems(newItem);
    console.log(`items are added as  Name:${itemName} Date:  ${itemDate}`);
  };

  /* Delete function */
  const deleteItem = (itemName) => {
    /* In delete ,we. have to use filter function  */
    const deleteItem = todoItems.filter((item) => item.name !== itemName);
    setToDoItems(deleteItem);
    console.log(`Items deleted is ${itemName}`);
  };
  return (
    <>
      <ToDoItemContext.Provider value={{ todoItems, addItem, deleteItem }}>
        <center>
          <div>
            <h1>Welcome to ToDo App</h1>
          </div>
          <AddToDo></AddToDo>
          <Message></Message>
          <ToDoItems></ToDoItems>
        </center>
      </ToDoItemContext.Provider>
    </>
  );
}

export default App;
