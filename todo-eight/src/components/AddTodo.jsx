const AddToDo = () => {
  return (
    <>
      <div classNameName Name="container text-center">
        <div classNameName Name="row align-items-start">
          <div classNameName Name="col">
            <input type="text" placeholder="Enter Task" />
          </div>
          <div classNameName Name="col">
            <input type="date" />
          </div>
          <div classNameName Name="col">
            <button type="button" classNameName Name="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddToDo;
