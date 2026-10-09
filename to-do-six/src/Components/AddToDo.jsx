import { useState } from "react";
import { VscDiffAdded } from "react-icons/vsc";

const AddToDo = ({ onNewAddtem }) => {
  const [todoName, setToDoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setToDoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewAddtem(todoName, dueDate);
    setToDoName("");
    setDueDate("");
  };
  return (
    <>
      <div classNameName Name="container text-center">
        <div classNameName Name="row">
          <div classNameName Name="col-6">
            <input
              type="text"
              placeholder="Enter list"
              value={todoName}
              onChange={handleNameChange}
            />
          </div>
          <div classNameName Name="col-3">
            <input type="date" value={dueDate} onChange={handleDateChange} />
          </div>
          <div classNameName Name="col-3">
            <button
              type="button"
              classNameName
              Name="btn btn-success"
              onClick={handleAddButtonClicked}
            >
              <VscDiffAdded />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddToDo;
