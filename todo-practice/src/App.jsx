import { useRef, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const inputRef = useRef();
  const [todoItems, setToDoitems] = useState([]);
  const [filter, setFilter] = useState("all");
  const [editText, setEditText] = useState("");
  const [editTextID, setEditTextID] = useState(null);
  /* Add Task */
  const handleAddTask = (event) => {
    event.preventDefault();
    const editText = inputRef.current.value.trim();

    if (editText === "") {
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      name: editText,
      completed: false,
    };

    setToDoitems((previousItems) => [...previousItems, newTask]);

    inputRef.current.value = "";
    inputRef.current.focus();
  };
  /* Delete Task */
  const handleDeleteTask = (taskId) => {
    setToDoitems((previousItems) =>
      previousItems.filter((items) => items.id !== taskId),
    );
  };
  /* Toogle Task  */
  const handleToggleITask = (itemID) => {
    setToDoitems((previousItems) =>
      previousItems.map((items) => {
        if (items.id === itemID) {
          return { ...items, completed: !items.completed };
        }
        return items;
      }),
    );
    console.log(`toggled Items ${itemID}`);
  };
  /* Remaining Counts */
  const remainingCount = todoItems.filter(
    (items) => items.completed === false,
  ).length;

  /* Completed Count */
  const completedCount = todoItems.filter(
    (items) => items.completed === true,
  ).length;

  /* Clear Button  Count */
  const handleClearCount = () => {
    setToDoitems((previousItems) =>
      previousItems.filter((items) => items.completed !== true),
    );
  }; /* Clear Button   */
  const handleCancelButton = () => {
    setEditTextID(null);
    setEditText("");
    console.log(`Items cancelled`);
  };
  const handleSaveEdit = (event) => {
    if (event.key === "Enter") {
      setToDoitems((previousItems) =>
        previousItems.map((item) => {
          if (item.id === editTextID) {
            return { ...item, name: trimmedText };
          }
          return item;
        }),
      );
      setEditText("");
      setEditTextID(null);
      console.log(`items are saved`);
    }
    const trimmedText = editText.trim();

    if (trimmedText === "") {
      return;
    }

    setToDoitems((previousItems) =>
      previousItems.map((item) => {
        if (item.id === editTextID) {
          return { ...item, name: trimmedText };
        }
        return item;
      }),
    );
    setEditText("");
    setEditTextID(null);
    console.log(`items are saved`);
  };
  /* Edit Task  Count */
  const handleEditButton = (items) => {
    setEditTextID(items.id);
    setEditText(items.name);
    console.log(`Edited task`);
  };
  /* Filter All */
  const handleFilterAll = () => {
    setFilter("all");
  };
  /* Filter Active */
  const handleFilterActive = () => {
    setFilter("active");
  };
  /*   const handleFilterCompleted = () => {
    setFilter("completed");
    const visibleTask = todoItems.filter((items) => items.completed === false);
  }; */
  const handleFilterCompleted = () => {
    setFilter("completed");
  };

  const visibleTask = todoItems.filter((items) => {
    if (filter === "active") {
      return items.completed === false;
    }
    if (filter === "completed") {
      return items.completed === true;
    }
    return true;
  });
  return (
    <>
      <h1>One thing at a time.</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="What would you like to get done?"
          ref={inputRef}
        />
        <button type="submit">Add task</button>
      </form>
      <button onClick={handleClearCount} disabled={completedCount === 0}>
        Clear task
      </button>
      <button
        type="button"
        className="btn btn-info"
        onClick={() => handleFilterAll()}
      >
        All
      </button>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => handleFilterActive()}
      >
        Active
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => handleFilterCompleted()}
      >
        Completed
      </button>
      {todoItems.length === 0 && <p>No tasks yet </p>}
      {todoItems.length > 0 &&
        filter === "active" &&
        visibleTask.length === 0 && <p>No active tasks</p>}
      <ul>
        {visibleTask.map((items) => (
          <li key={items.id}>
            {editTextID === items.id ? (
              <input
                value={editText}
                onChange={(event) => setEditText(event.target.value)}
                onKeyDown={handleSaveEdit}
              />
            ) : (
              <span
                style={{
                  textDecoration: items.completed ? "line-through" : "none",
                }}
              >
                {items.name}
              </span>
            )}
            <button onClick={() => handleDeleteTask(items.id)}>
              Delete task
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleEditButton(items)}
            >
              Edit
            </button>
            {editTextID === items.id && (
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleCancelButton}
              >
                Cancel
              </button>
            )}
            {editTextID === items.id && (
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleSaveEdit}
              >
                Save
              </button>
            )}
            <input
              type="checkbox"
              checked={items.completed}
              onChange={() => handleToggleITask(items.id)}
            />
          </li>
        ))}
      </ul>
      <div>
        {remainingCount} {remainingCount === 1 ? "task" : "tasks"} remaining
      </div>
      <div>
        {completedCount} {completedCount === 1 ? "task " : "tasks"} completed
      </div>
      <div>Filter :{filter} </div>
    </>
  );
}

export default App;
