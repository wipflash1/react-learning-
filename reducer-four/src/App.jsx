import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddItems from "./components/AddItems";
import Message from "./components/Message";
import ToDoItems from "./components/ToDoItems";
import { useReducer } from "react";
import { ToDoItemsContext } from "./store/todo-items-store";

/* crecting pure reducer function */
const todoItemsReducer = (currToDoItems, action) => {
  let newToDoItem = currToDoItems;
  if (action.type == "ADD_ITEM") {
    newToDoItem = [
      ...currToDoItems,
      {
        id: action.payload.id,
        name: action.payload.todoName,
        dueDate: action.payload.todoDate,
        completed: action.payload.completed,
      },
    ];
  } else if (action.type == "DELETE_ITEM") {
    newToDoItem = currToDoItems.filter(
      (items) => items.id !== action.payload.todoId,
    );
  } else if (action.type == "TOGGLE_ITEM") {
    if (items.id === action.payload.todoId) {
      return {
        ...currToDoItems,
        completed: !items.completed,
      };
    }

    return items;
  }
  return newToDoItem;
};

function App() {
  const [todoItems, dispatchToDoItems] = useReducer(todoItemsReducer, []);

  /* Add functionility with action object and dispatch */
  const addItems = (todoName, todoDate) => {
    const newAddAction = {
      type: "ADD_ITEM",
      payload: {
        id: crypto.randomUUID(),
        todoName: todoName,
        todoDate: todoDate,
        completed: false,
      },
    };
    dispatchToDoItems(newAddAction);
  };

  /* Delete Functionlity with action obj and the dispatch */
  const deleteItems = (todoId) => {
    const newDeleteAction = {
      type: "DELETE_ITEM",
      payload: {
        todoId: todoId,
      },
    };
    dispatchToDoItems(newDeleteAction);
  };
  /* Toogle feature */
  const toggleItem = (todoId) => {
    const toggleAction = {
      type: "TOGGLE_ITEM",
      payload: {
        todoId: todoId,
      },
    };
    dispatchToDoItems(toggleAction);
  };
  return (
    <>
      <ToDoItemsContext.Provider
        value={{ todoItems, addItems, deleteItems, toggleItem }}
      >
        <center>
          <h1> Welcome to the App </h1>
          <AddItems />
          <Message />
          <ToDoItems />
        </center>
      </ToDoItemsContext.Provider>
    </>
  );
}

export default App;
