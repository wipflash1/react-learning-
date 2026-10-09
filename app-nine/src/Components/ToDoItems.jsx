import Items from "./Items";

const ToDoItems = ({ todoItems }) => {
  return (
    <>
      {todoItems.map((items) => (
        <Items todoName={items.name} todoDate={items.dueDate}></Items>
      ))}
    </>
  );
};
export default ToDoItems;
