import { useState } from "react";

const AddToDo = ({ handleAddButtonClicked }) => {
  const [todoName, setToDoName] = useState("");
  const [todoDate, setToDoDate] = useState("");

  const handleAddItem = (event) => {
    setToDoName(event.target.value);
    console.log(event.target.value);
  };
  const handleDateItem = (event) => {
    setToDoDate(event.target.value);
    console.log(event.target.value);
  };
  const handleAddButton = (event) => {
    setToDoName("");
    setToDoDate("");
    handleAddButtonClicked(todoName, todoDate);
    console.log(`items added are Name:${todoName} Date:${todoDate}`);
  };
  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col">
          <input
            type="text"
            placeholder="Enter task here.."
            onChange={handleAddItem}
            value={todoName}
          />
        </div>
        <div className="col">
          <input type="date" onChange={handleDateItem} value={todoDate} />
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => handleAddButton("a", "b")}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddToDo;
