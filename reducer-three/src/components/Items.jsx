const Items = ({ todoId, todoName, todoDate, deleteItems }) => {
  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col">{todoName}</div>
        <div className="col">{todoDate}</div>
        <div className="col">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteItems(todoId)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default Items;
