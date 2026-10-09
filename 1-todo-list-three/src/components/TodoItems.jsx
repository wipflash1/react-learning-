import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div classNameName NameName="item-container">
        {todoItems.map((item) => (
          <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
        ))}
        {/* <TodoItem todoDate="4/3/2026" todoName="Buy Milk"></TodoItem>
        <TodoItem todoDate="4/3/2026" todoName="Buy Bread"></TodoItem>
        <TodoItem todoDate="4/3/2026" todoName="Buy Cream"></TodoItem> */}
      </div>
    </>
  );
};
export default TodoItems;
