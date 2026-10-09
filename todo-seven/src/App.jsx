import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Message from "./components/Heading";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";

function App() {
  const [todoItems, setToDoItems] = useState([
    { name: "buy Milk", dueDate: "12/12/2026" },
    { name: "buy Milk", dueDate: "12/12/2026" },
    { name: "buy Milk", dueDate: "12/12/2026" },
  ]);
  //Function ofAdding New Items as both name and date
  const OnAddNewItem = (itemName, itemDueDate) => {
    const newToDoItem = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setToDoItems(newToDoItem);
    console.log(`items added are : Name :${itemName} Date:${itemDueDate}`);
  };
  return (
    <>
      <Heading></Heading>
      <div clasName="container">
        <AddToDo onNewItem={OnAddNewItem}></AddToDo>
        <ToDoItems todoItems={todoItems}></ToDoItems>
      </div>
    </>
  );
}

export default App;
