import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./component/Heading";
import AddToDo from "./component/AddToDo";
import ToDoItems from "./component/ToDoItems";
import Message from "./component/Message";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";
function App() {
  const [todoItems, setTodoItems] = useState([]);

  // handling the Add button action using the spread operator

  /*   const handleAddItem = (itemName, itemDate) => {
    const newAddItem = [...todoItems, { name: itemName, dueDate: itemDate }];
    setTodoItems(newAddItem);
    console.log(`items clicked are Name :${itemName} Date: ${itemDate}`);
  };
 */

  /* handling the Add button using functional update  */
  const addNewItem = (itemName, itemDate) => {
    setTodoItems((currVal) => [
      ...currVal,
      { name: itemName, dueDate: itemDate },
    ]);
  };

  //Handling delete button
  const deleteItem = (itemName) => {
    const newDeleteItem = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newDeleteItem);
    console.log(`items deleted are Name :${itemName}`);
  };
  /*   const defaultToDo = [
    /* {  name: " buy milks", dueDate: "PYKRP14949900000050758"  }, */

  return (
    <>
      <TodoItemsContext.Provider
        value={{
          todoItems,
          addNewItem,
          deleteItem,
        }}
      >
        <Heading></Heading>
        <AddToDo></AddToDo>
        <Message></Message>
        <ToDoItems></ToDoItems>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
