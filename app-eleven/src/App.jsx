import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import Heading from "./components/Heading";
import { useState } from "react";

function App() {
  const [todoItems, settodoItems] = useState([]);

  //onClick Add functionality
  const handleAddItem = (itemName, itemDate) => {
    // const newItemAdded = [...todoItems, { name: itemName, dueDate: itemDate }];
    // settodoItems(newItemAdded);

    //This could be deleted
    // settodoItems((currValue) => {
    //   const newTodoItems = [
    //     ...currValue,
    //     { name: itemName, dueDate: itemDate },
    //   ]; 
    //   return newTodoItems;
    // });

    settodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDate },
    ]);
  };
  //onClick Add functionality
  const handleDeleteItem = (itemName) => {
    const newItemDeleted = todoItems.filter((item) => item.name !== itemName);
    settodoItems(newItemDeleted);
  };

  return (
    <>
      <Heading></Heading>
      <AddToDo onAddNewItem={handleAddItem}></AddToDo>
      <ToDoItems
        newItems={todoItems}
        onDeleteItem={handleDeleteItem}
      ></ToDoItems>
    </>
  );
}

export default App;
