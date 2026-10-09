import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddToDo from "./Components/AddToDo";
import ToDoItems from "./Components/ToDoItems";
import { useState } from "react";

function App() {
  // for dynamic setting the values for repainting
  const [todoItems, setToDoItems] = useState([
    { name: "Buy Milk", dueDate: "12/12./2026" },
    { name: "Buy Ghee", dueDate: "12/12./2026" },
    { name: "Buy Bread", dueDate: "12/12./2026" },
    { name: "Buy Pasta ", dueDate: "12/12./2026" },
    { name: "Buy cream", dueDate: "12/12./2026" },
    { name: "Buy EY", dueDate: "12/12./2026" },
  ]);

  // Adding new Item functionality
  const handleAddNewItem = (itemName, itemDate) => {
    console.log(
      `Items are clicked are : name: ${itemName} dueDate: ${itemDate}`,
    );
  };
  return (
    <>
      <div>
        <h1>ToDo App</h1>
      </div>
      <AddToDo onNewItems={handleAddNewItem}></AddToDo>
      <ToDoItems todoItems={todoItems}></ToDoItems>
    </>
  );
}

export default App;
