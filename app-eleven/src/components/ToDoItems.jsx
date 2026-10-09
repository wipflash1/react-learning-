import Items from "./Items";
const ToDoItems = ({ newItems, onDeleteItem }) => {
  return (
    <>
      {newItems.map((items) => (
        <Items
          key={items}
          todoName={items.name}
          todoDate={items.dueDate}
          onDeleteItemClicked={onDeleteItem}
        ></Items>
      ))}
    </>
  );
};
export default ToDoItems;
