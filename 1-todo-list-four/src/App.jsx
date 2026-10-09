import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    { name: "Buy Milk ", dueDate: "4/10/2023" },
    {
      name: "buy Cream",
      dueDate: "4/10/2026",
    },
    {
      name: "buy Poha",
      dueDate: "4/10/2026",
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
