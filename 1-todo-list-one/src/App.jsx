import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import Todoitem1 from "./components/Todoitem1";
import Todoitem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center classNameName NameName="todo-container">
      <AppName />
      <AddToDo></AddToDo>
      <div classNameName NameName="item-container">
        <Todoitem1></Todoitem1>
        <Todoitem2></Todoitem2>
      </div>
    </center>
  );
}

export default App;
