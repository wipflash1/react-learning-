import { useContext, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoItems from "./components/ToDoItems";
import AddToDo from "./components/AddToDo";
import Message from "./components/Message";
import { ToDoItemsContext } from "./store/ToDo-Items-store";

function App() {
  const [todoItems, setToDoItems] = useState([
    /*   { name: "Buy Milk", dueDate: "12/12/2026" },
    { name: "Buy Bread", dueDate: "12/12/2026" },
    { name: "Buy Tea", dueDate: "12/12/2026" },
    { name: "Buy patty", dueDate: "12/12/2026" },
    { name: "Buy plane", dueDate: "12/12/2026" },
    { name: "Buy whey", dueDate: "12/12/2026" }, */
  ]);
  /* Adding the functional update to the logic  */
  const addItem = (itemName, itemDate) => {
    setToDoItems((currVal) => [
      ...currVal,
      { id: crypto.randomUUID(), name: itemName, dueDate: itemDate },
    ]);
    console.log(`items added are Name:${itemName} Date:${itemDate}`);
  };

  const deleteItem = (itemName) => {
    const deleteItem = todoItems.filter((item) => item.name !== itemName);
    setToDoItems(deleteItem);
    console.log(`Item deleted : ${itemName}`);
  };
  return (
    <>
      <ToDoItemsContext.Provider value={{ todoItems, addItem, deleteItem }}>
        <center>
          <div>
            <h1>ToDo App </h1>
            <AddToDo />
            <Message />
            <ToDoItems />
          </div>
        </center>
      </ToDoItemsContext.Provider>
    </>
  );
}

export default App;
