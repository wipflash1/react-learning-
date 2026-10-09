import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";

import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    { name: "buy Milk", dueDate: "14/10/2028" },
    { name: "buy Sugar", dueDate: "7/10/2028" },
    { name: "buy Bread", dueDate: "6/10/2028" },
    { name: "buy Rasmalai", dueDate: "5/10/2028" },
  ];
  return (
    <center classNameName NameName="todo-container">
      <AppName />
      <AddToDo></AddToDo>
      <TodoItems todoItems={todoItems}></TodoItems>
      {/* <div classNameName NameName="item-container">
        <TodoItem todoDate="4/3/2026" todoName="Buy Milk"></TodoItem>
        <TodoItem todoDate="4/3/2026" todoName="Buy Bread"></TodoItem>
        <TodoItem todoDate="4/3/2026" todoName="Buy Cream"></TodoItem>
      </div> */}
    </center>
  );
}

export default App;
