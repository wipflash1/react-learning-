import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddItems from "./components/AddItems";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";
import Message from "./components/Message";
import { ToDoItemContext } from "./store/todo-item-store";

function App() {
  const [todoItems, setToDoItems] = useState([
    /*   { name: "Buy Milk", dueDate: "12/12/2026" },
    { name: "Buy Milk", dueDate: "12/12/2026" },
    { name: "Buy Milk", dueDate: "12/12/2026" },
    { name: "Buy Milk", dueDate: "12/12/2026" },
  */
  ]);

  /* Add functionality  */
  const addItems = (itemName, itemDate) => {
    const newItem = {
      id: crypto.randomUUID(),
      name: itemName,
      dueDate: itemDate,
    };
    setToDoItems((currVal) => [...currVal, newItem]);
    console.log(
      `items added are : id:${newItem.id} Name:${newItem.name}    Date :${newItem.dueDate}`,
    );
  };

  /* Delete functionlaity  */
  const deleteItem = (itemName) => {
    const newDeletedItem = todoItems.filter((item) => item.name !== itemName);
    setToDoItems(newDeletedItem);
    console.log(`items deleted with the name ${itemName}`);
  };
  return (
    <>
      <ToDoItemContext.Provider value={{ todoItems, addItems, deleteItem }}>
        <center>
          <div>
            <h1>ToDo App</h1>
          </div>
          <AddItems></AddItems>
          <Message></Message>
          <ToDoItems></ToDoItems>
        </center>
      </ToDoItemContext.Provider>
    </>
  );
}

export default App;

/* This is the 12th time i am writing this code  but i feel good so far The is the best ever  */
