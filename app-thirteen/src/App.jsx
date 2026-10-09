import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddToDo from "./components/AddToDo";
import Message from "./components/Message";
import TodoItems from "./components/TodoItems";
import { ToDoItemContext } from "./store/todo-item-store";

function App() {
  const [todoItems, setToDoItems] = useState([]);
  /*  Adding Functionality*/
  const addItem = (itemName, itemDate) => {
    setToDoItems((currVal) => [
      ...currVal,
      { name: itemName, dueDate: itemDate },
    ]);
  };
  /* Delete Functionality */
  const deleteItem = (itemName) => {
    const newDeleteItem = todoItems.filter((item) => item.name !== itemName);
    setToDoItems(newDeleteItem);
    console.log(` items deleted are Item Name : ${itemName}`);
  };

  return (
    <>
      <ToDoItemContext.Provider value={{ todoItems, addItem, deleteItem }}>
        <div>
          <h1>ToDo App</h1>
        </div>
        <AddToDo></AddToDo>
        <Message></Message>
        <TodoItems></TodoItems>
      </ToDoItemContext.Provider>
    </>
  );
}

export default App;
