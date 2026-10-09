import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddToDo from "./components/AddTodo";
import ToDoItems from "./components/ToDoItems";

function App() {
  const todoItems = [
    { name: "Buy Ghee ", dueDate: "12/12/2026" },
    { name: "Buy Bread ", dueDate: "12/12/2026" },
    { name: "Buy sabzi ", dueDate: "12/12/2026" },
  ];
  return (
    <>
      <div>
        <h1>ToDo App</h1>
      </div>
      <div>
        <AddToDo></AddToDo>
        <ToDoItems todoItems={todoItems}></ToDoItems>
      </div>
    </>
  );
}

export default App;
