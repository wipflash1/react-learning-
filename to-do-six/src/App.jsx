import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./Components/Heading";
import AddToDo from "./Components/AddToDo";
import ToDoItems from "./Components/ToDoItems";
import { useState } from "react";
import Welcome from "./Components/Welcome";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleOnClick = (itemName, itemDate) => {
    const newToDoItems = [...todoItems, { name: itemName, dueDate: itemDate }];
    setTodoItems(newToDoItems);
    console.log(`NewItems added are : Name :${itemName}  Date:${itemDate}`);
  };

  const handleDeleteClicked = (todoDeteleItem) => {
    const newToDoItem = todoItems.filter(
      (item) => item.name !== todoDeteleItem,
    );
    setTodoItems(newToDoItem);
    console.log(`item deleted ${todoDeteleItem}`);
  };

  return (
    <>
      <Heading></Heading>
      <div classNameName Name="todoContainer">
        <AddToDo onNewAddtem={handleOnClick}></AddToDo>
        {todoItems.length === 0 && <Welcome></Welcome>}
        <ToDoItems
          onDeleteClicked={handleDeleteClicked}
          todoItems={todoItems}
        ></ToDoItems>
      </div>
    </>
  );
}

export default App;
