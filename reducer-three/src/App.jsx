import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddToDo from "./components/AddToDo";
import Welcome from "./components/Welcome";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";

function App() {
  const [todoItems, setToDoItems] = useState([
    { id: "1", name: "kritagya", dueDate: "1/1/2029" },
    { id: "2", name: "Sandeep", dueDate: "1/1/2029" },
    { id: "3", name: "Kusum", dueDate: "1/1/2029" },
    { id: "4", name: "Lavanya", dueDate: "1/1/2029" },
  ]);

  const AddItems = (todoName, todoDate) => {
    const newToDoItem = {
      id: crypto.randomUUID(),
      name: todoName,
      dueDate: todoDate,
    };
    setToDoItems((currentItems) => [...currentItems, newToDoItem]);
    console.log(`items are added now`);
  };

  const deleteItems = (todoId) => {
    setToDoItems((currentItems) =>
      currentItems.filter((item) => item.id !== todoId),
    );
    console.log(`item is deleted ${todoId}`);
  };
  return (
    <>
      <center>
        <h1> Welcome to the app</h1>
        <AddToDo handleAddButtonClicked={AddItems} />
        <Welcome todoItems={todoItems} />
        <ToDoItems todoItems={todoItems} handleDeleteItems={deleteItems} />
      </center>
    </>
  );
}

export default App;
