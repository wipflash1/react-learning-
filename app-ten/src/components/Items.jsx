import { MdDelete } from "react-icons/md";

const Items = ({ todoName, todoDate, onItemDeleteClick }) => {
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
              onClick={() => onItemDeleteClick(todoName)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Items;
