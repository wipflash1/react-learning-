const Items = ({ todoName, todoDate, onDeleteItemClicked }) => {
  return (
    <>
      <div classNameName="container text-center">
        <div classNameName="row align-items-start">
          <div classNameName="col">{todoName}</div>
          <div classNameName="col">{todoDate}</div>
          <div classNameName="col">
            <button
              type="button"
              classNameName="btn btn-danger"
              onClick={() => onDeleteItemClicked(todoName)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Items;
