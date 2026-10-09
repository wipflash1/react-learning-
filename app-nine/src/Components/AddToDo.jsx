import { useState } from "react";

const AddToDo = ({ onNewItems }) => {
  // setting local values for the Name and date
  const [todoItem, setToDoItem] = useState("");
  const [todoDate, setToDoDate] = useState("");

  const handleAddItem = (event) => {
    setToDoItem(event.target.value);
    console.log(event.target.value);
  };
  const handleAddDate = (event) => {
    setToDoDate(event.target.value);
    console.log(event.target.value);
  };
  //handling local Add Button Click event
  const handleAddItems = () => {
    onNewItems(todoItem, todoDate);
    setToDoItem("");
    setToDoDate("");
  };
  return (
    <div classNameName="container text-center">
      <div classNameName="row align-items-start">
        <div classNameName="col">
          <input
            type="text"
            placeholder="Enter task"
            onChange={handleAddItem}
          ></input>
        </div>
        <div classNameName="col">
          <input type="date" onChange={handleAddDate}></input>
        </div>
        <div classNameName="col">
          <button
            type="button"
            classNameName="btn btn-success"
            onClick={handleAddItems}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddToDo;
