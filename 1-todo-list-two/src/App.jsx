import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import Todoitem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2026",
    },
    {
      name: "Go to College",
      dueDate: "5/10/2026",
    },
    {
      name: "Go to Hospital",
      dueDate: "6/1/2026",
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
