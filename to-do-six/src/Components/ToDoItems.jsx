import Items from "./Items";
const ToDoItems = ({ todoItems, onDeleteClicked }) => {
  return (
    <>
      <div>
        {todoItems.map((item) => (
          <Items
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteClicked={onDeleteClicked}
          ></Items>
        ))}
      </div>
    </>
  );
};
export default ToDoItems;
