const Items = ({ todoId, todoTitle, todoDate, todoComplete, deleteItems }) => {
  return (
    <article className="todo-item">
      <div className="task-details">
        <h3>{todoTitle}</h3>
        <p>{todoDate ? `Due ${todoDate}` : "No due date"}</p>
      </div>
      <span className={`status-badge ${todoComplete === "Done" ? "is-done" : ""}`}>
        {todoComplete}
      </span>
      <button
        type="button"
        className="delete-button"
        aria-label={`Delete ${todoTitle}`}
        onClick={() => deleteItems(todoId)}
      >
        Delete
      </button>
    </article>
  );
};
export default Items;
