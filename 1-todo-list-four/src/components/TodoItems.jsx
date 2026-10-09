import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div classNameName NameName="item-container">
        {todoItems.map((item) => (
          <TodoItem todoName={item.name} todoDate={item.dueDate}></TodoItem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
