import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import { useState, useEffect } from "react";
import Message from "./components/Message";

function App() {
  const [todos, setTodDos] = useState(() => {
    const savedItems = localStorage.getItem("todos");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    async function loadTodos() {
      try {
        const response = await fetch("/todos");
        if (!response.ok) {
          throw new Error("could not load todos");
        }
        const data = await response.json();
        setTodDos(data);
      } catch (error) {
        setError(error.message);
      }
    }
    loadTodos();
  }, []);
  const handleAddItems = async (todoName, todoDate) => {
    setError("");

    try {
      const response = await fetch("/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: todoName,
          date: todoDate,
        }),
      });

      if (!response.ok) {
        throw new Error("Could not add todo");
      }

      const savedTodo = await response.json();

      setTodDos((currentTodos) => [...currentTodos, savedTodo]);
      return true;
    } catch (error) {
      setError(error.message);
      return false;
    }
  };
  const handleDeleteItems = (todoId) => {
    setTodDos((previousItems) =>
      previousItems.filter((items) => items.id !== todoId),
    );
    console.log(`items deleted are ${todoId}`);
  };
  return (
    <>
      <main className="todo-app">
        <header className="app-header">
          <p className="eyebrow">A little progress, every day</p>
          <h1>My todos</h1>
          <p>Make room for what matters. One task at a time.</p>
        </header>
        {error && (
          <p className="error-message" role="alert">
            {error}
          </p>
        )}
        <AddToDo addItems={handleAddItems} />
        <section className="todo-list" aria-label="Your tasks">
          <div className="list-heading">
            <h2>Your tasks</h2>
            <span>{todos.length} total</span>
          </div>
          <Message todos={todos} />

          <ToDoItems todos={todos} deleteItems={handleDeleteItems} />
        </section>
      </main>
    </>
  );
}

export default App;
