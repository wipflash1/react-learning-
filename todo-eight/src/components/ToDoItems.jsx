import Items from "./Items";
const ToDoItems = ({ todoItems }) => {
  return (
    <>
      {todoItems.map((item) => (
        <Items todoName={item.name} todoDate={item.dueDate}></Items>
      ))}
    </>
  );
};
export default ToDoItems;
