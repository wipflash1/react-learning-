import { useState } from "react";

const AddToDo = ({ onNewItem }) => {
  const [toAddItems, setToAddItems] = useState("");
  const [toAddDate, setToAddDate] = useState("");

  const handleAddItem = (event) => {
    setToAddItems(event.target.value);
    console.log(`${event.target.value}`);
  };

  const handleAddDate = (event) => {
    setToAddDate(event.target.value);
    console.log(`${event.target.value}`);
  };

  const handleAddButtonClicked = () => {
    onNewItem(toAddItems, toAddDate);
    setToAddItems("");
    setToAddDate("");
  };
  return (
    <div classNameName="container text-center">
      <div classNameName="row align-items-start">
        <div classNameName="col">
          <input
            type="text"
            placeholder="Enter task"
            onChange={handleAddItem}
            value={toAddItems}
          />
        </div>
        <div classNameName="col">
          <input type="date" onChange={handleAddDate} value={toAddDate} />
        </div>
        <div classNameName="col">
          <button
            type="button"
            classNameName="btn btn-success"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddToDo;
