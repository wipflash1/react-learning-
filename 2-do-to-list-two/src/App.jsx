import "./App.css";
import AppName from "./components/AppName";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTask from "./components/AddTask";
import TodoItem from "./components/TodoItem";
import TodoItem2 from "./components/TodoItem2";

function App() {
  return (
    <center>
      <div classNameName NameName="appname-container">
        <AppName></AppName>
      </div>
      <div classNameName NameName="addtask-container">
        <AddTask></AddTask>
      </div>
      <div classNameName NameName="item-container">
        <TodoItem></TodoItem>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;
