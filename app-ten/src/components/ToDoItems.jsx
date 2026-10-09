import Items from "./Items";
const ToDoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      {" "}
      {todoItems.map((items) => (
        <Items
          todoName={items.name}
          todoDate={items.dueDate}
          onItemDeleteClick={onDeleteClick}
        ></Items>
      ))}
    </>
  );
};
export default ToDoItems;
