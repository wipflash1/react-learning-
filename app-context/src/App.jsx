import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import Message from "./components/Message";
import { useState } from "react";
import { ToDoItemsContext } from "./store/todo-item-store";

function App() {
  const [todoItems, setToDoItems] = useState([]);

  const addItem = (itemName, itemDate) => {
    /* if the set value is set on the basis of old value , then rather passing the value ,pass the method instead */
    setToDoItems((currValue) => [
      ...currValue,
      { name: itemName, duedate: itemDate },
    ]);
  };

  const deleteItem = (itemName) => {
    const newDeleteItem = todoItems.filter((item) => item.name !== itemName);
    setToDoItems(newDeleteItem);
    console.log(`items deleted ${itemName}`);
  };
  return (
    <ToDoItemsContext.Provider
      value={{ todoItems: todoItems, addItem: addItem, deleteItem: deleteItem }}
    >
      <center>
        <div>To Do App </div>
        <AddToDo></AddToDo>
        <Message></Message>
        <ToDoItems></ToDoItems>
      </center>
    </ToDoItemsContext.Provider>
  );
}

export default App;
