import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
import todoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div classNameName NameName={styles.itemContainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item}
            todoName={item.name}
            todoDate={item.dueDate}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
