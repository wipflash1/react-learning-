import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import Message from "./components/Message";
import { ToDoItemsContext } from "./store/todo-items-store";
import { useReducer } from "react";

const todoItemsReducder = (currToDoItems, action) => {
  let newToDoItems = currToDoItems;
  if (action.type == "ADD_ITEM") {
    newToDoItems = [
      ...currToDoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDate },
    ];
  } else if (action.type == "DELETE_ITEM") {
    newToDoItems = currToDoItems.filter(
      (items) => items.name !== action.payload.itemName,
    );
  }
  return newToDoItems;
};

function App() {
  const [todoItems, dispatchToDoItems] = useReducer(todoItemsReducder, []);

  const addItems = (itemName, itemDate) => {
    const newAddItemAction = {
      type: "ADD_ITEM",
      payload: { itemName, itemDate },
    };
    dispatchToDoItems(newAddItemAction);
  };

  const deleteItems = (itemName) => {
    const newDeteleActionItem = {
      type: "DELETE_ITEM",
      payload: {
        itemName,
      },
    };
    dispatchToDoItems(newDeteleActionItem);
  };

  return (
    <>
      <ToDoItemsContext.Provider value={{ todoItems, addItems, deleteItems }}>
        <center>
          <h1>ToDo App </h1>
          <AddToDo />
          <Message />
          <ToDoItems />
        </center>
      </ToDoItemsContext.Provider>
    </>
  );
}

export default App;
