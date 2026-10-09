import { useState } from "react";
import { GrAdd } from "react-icons/gr";

const AddToDo = ({ onAddItem }) => {
  const [ToDoAdd, setToDoAdd] = useState("");
  const [toDoDate, setToDoDate] = useState("");

  const handleItemChange = (event) => {
    setToDoAdd(event.target.value);
  };

  const handleDateChange = (event) => {
    setToDoDate(event.target.value);
  };

  const handleAddItem = () => {
    onAddItem(ToDoAdd, toDoDate);
    setToDoAdd("");
    setToDoDate("");
  };
  return (
    <>
      <div classNameName="container text-center">
        <div classNameName="row align-items-start">
          <div classNameName="col">
            <input
              type="text"
              placeholder="Enter your task"
              onChange={handleItemChange}
              value={ToDoAdd}
            />
          </div>
          <div classNameName="col">
            <input type="date" onChange={handleDateChange} value={toDoDate} />
          </div>
          <div classNameName="col">
            <button
              type="button"
              classNameName="btn btn-success"
              onClick={handleAddItem}
            >
              <GrAdd />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddToDo;
