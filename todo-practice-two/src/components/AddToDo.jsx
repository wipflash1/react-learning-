import { useRef, useState } from "react";

const AddToDo = ({ addItems }) => {
  const [isSaving, setIsSaving] = useState(false);
  const todoNameElement = useRef();
  const todoDateElement = useRef();
  const handleAddItemButton = async (event) => {
    event.preventDefault();

    const todoName = todoNameElement.current.value.trim();
    const todoDate = todoDateElement.current.value;

    if (!todoName || !todoDate) {
      return;
    }

    setIsSaving(true);

    try {
      const success = await addItems(todoName, todoDate);

      if (success) {
        todoNameElement.current.value = "";
        todoDateElement.current.value = "";
      }
    } finally {
      setIsSaving(false);
    }
  };
  return (
    <form className="todo-form" onSubmit={handleAddItemButton}>
      <label>
        Task
        <input
          type="text"
          placeholder="What needs to get done?"
          ref={todoNameElement}
          required
        />
      </label>
      <label>
        Due date
        <input type="date" ref={todoDateElement} required />
      </label>
      <button type="submit" className="add-button" disabled={isSaving}>
        {isSaving ? "Saving..." : "+ Add task"}
      </button>
    </form>
  );
};
export default AddToDo;
