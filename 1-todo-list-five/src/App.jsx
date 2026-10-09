import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";

import TodoItem from "./components/TodoItem";

import TodoItems from "./components/TodoItems";
import "./App.css";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "1/12/2026 ",
    },
    {
      name: "Buy Bread",
      dueDate: "1/12/2026 ",
    },
    {
      name: "Buy Chocolate",
      dueDate: "1/12/2026",
    },
  ];
  return (
    <center classNameName NameName="todo-container">
      <AppName />
      <AddToDo></AddToDo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
