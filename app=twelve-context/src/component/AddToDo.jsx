import { useContext, useRef, useState } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const AddToDo = ({ onAddItemClicked }) => {
  /*   const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems; */

  const { addNewItem } = useContext(TodoItemsContext);

  /* By Using useRef  */
  const todoItemElement = useRef();
  const todoDateElement = useRef();

  /* Handling the onClickButtion  */
  const onAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoItemElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoItemElement.current.value = "";
    todoDateElement.current.value = "";
    addNewItem(todoName, todoDate);
  };
  return (
    <>
      <div classNameName="container text-center">
        <form
          classNameName="row align-items-start"
          onSubmit={onAddButtonClicked}
        >
          <div classNameName="col">
            <input type="text" ref={todoItemElement} placeholder="Enter task" />
          </div>
          <div classNameName="col">
            <input type="date" ref={todoDateElement} />
          </div>
          <div classNameName="col">
            <button type="submit" classNameName="btn btn-success">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddToDo;
