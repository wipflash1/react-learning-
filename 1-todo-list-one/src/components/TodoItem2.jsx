function Todoitem2() {
  let todoName = "Go to College";
  let todoDate = "5/10/2023";
  return (
    <div classNameName NameName="container">
      <div classNameName NameName="row kg-row">
        <div classNameName NameName="col-sm-6">
          {todoName}
        </div>
        <div classNameName NameName="col-sm-3">
          {todoDate}
        </div>
        <div classNameName NameName="col-sm-3">
          <button
            type="button"
            classNameName
            NameName="btn btn-danger kg-button "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem2;
