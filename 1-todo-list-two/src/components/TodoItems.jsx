import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div classNameName NameName="item-container">
        {todoItems.map((item) => (
          <TodoItem todoName={item.name} todoDate={item.dueDate}></TodoItem>
        ))}
        {/* <TodoItem todoName="Buy Milk" todoDate="4/10/2026"></TodoItem> */}
        {/* <TodoItem todoName="Go to College" todoDate="5/10/2026"></TodoItem> */}
      </div>
    </>
  );
};
export default TodoItems;
