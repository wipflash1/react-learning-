import Items from "./Items";
const ToDoItems = ({ todoItems, handleDeleteItems }) => {
  return (
    <>
      {todoItems.map((items) => (
        <Items
          key={items.id}
          todoId={items.id}
          todoName={items.name}
          todoDate={items.dueDate}
          deleteItems={handleDeleteItems}
        ></Items>
      ))}
    </>
  );
};
export default ToDoItems;
