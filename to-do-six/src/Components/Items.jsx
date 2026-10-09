import { MdOutlineDelete } from "react-icons/md";

const Items = ({ todoName, todoDate, onDeleteClicked }) => {
  return (
    <>
      <div classNameName Name="container text-center">
        <div classNameName Name="row">
          <div classNameName Name="col-6">
            {todoName}
          </div>
          <div classNameName Name="col-3">
            {todoDate}
          </div>
          <div classNameName Name="col-3">
            <button
              type="button"
              classNameName
              Name="btn btn-danger"
              onClick={() => onDeleteClicked(todoName)}
            >
              <MdOutlineDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Items;
