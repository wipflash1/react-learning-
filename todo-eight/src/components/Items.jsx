const Items = ({ todoName, todoDate }) => {
  return (
    <>
      <div classNameName Name="container text-center">
        <div classNameName Name="row align-items-start">
          <div classNameName Name="col">
            {todoName}
          </div>
          <div classNameName Name="col">
            {todoDate}
          </div>
          <div classNameName Name="col">
            <button type="button" classNameName Name="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Items;
