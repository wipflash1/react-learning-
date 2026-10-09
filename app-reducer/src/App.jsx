import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddToDo from "./components/AddToDo";
import Message from "./components/Message";
import ToDoItems from "./components/ToDoItems";
import { ToDoItemsContext } from "./store/todo-items-store";
import { useReducer } from "react";

const todoItemReducer = (currTodoItems, action) => {
  let newToDoItems = currTodoItems;
  if (action.type == "NEW_ITEM") {
    newToDoItems = [
      ...currTodoItems,
      {
        id: action.payload.itemId,
        name: action.payload.itemName,
        dueDate: action.payload.itemDate,
      },
    ];
  } else if (action.type == "DELETE_ITEM") {
    newToDoItems = currTodoItems.filter(
      (item) => item.id !== action.payload.itemId,
    );
  }
  return newToDoItems;
};

function App() {
  const [todoItems, dispatchToDoItems] = useReducer(todoItemReducer, []);

  const addItem = (itemName, itemDate) => {
    /* providing action obj */
    const newAddItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemId: crypto.randomUUID(),
        itemName,
        itemDate,
      },
    };
    dispatchToDoItems(newAddItemAction);
  };

  const deleteItem = (itemId) => {
    const newDeleteAction = {
      type: "DELETE_ITEM",
      payload: { itemId },
    };
    dispatchToDoItems(newDeleteAction);
  };
  return (
    <>
      <ToDoItemsContext.Provider value={{ todoItems, addItem, deleteItem }}>
        <center>
          <div>
            <h1>ToDo App with Reducer </h1>
          </div>
          <AddToDo />
          <Message />
          <ToDoItems />
        </center>
      </ToDoItemsContext.Provider>
    </>
  );
}

export default App;
