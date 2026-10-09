import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddToDo from "./components/AddToDoItems";
import ToDoItems from "./components/ToDoItems";
import Message from "./components/Message";
import { useState } from "react";

function App() {
  const [todoItems, settodoItems] = useState([]);

  const handleAddItem = (itemName, itemDate) => {
    const newItemAdded = [...todoItems, { name: itemName, dueDate: itemDate }];
    settodoItems(newItemAdded);
  };

  const handleDeleteItem = (todoItemName) => {
    const deleteItems = todoItems.filter(
      (items) => items.name !== todoItemName,
    );
    settodoItems(deleteItems);

    console.log(`item deleted ${todoItemName}`);
  };
  return (
    <>
      <div>
        <h1>ToDo App</h1>
      </div>
      <AddToDo onAddItem={handleAddItem}></AddToDo>
      {todoItems.length === 0 && <Message todoItems={todoItems}></Message>}
      <ToDoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></ToDoItems>
    </>
  );
}

export default App;
