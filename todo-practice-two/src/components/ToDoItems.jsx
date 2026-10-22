import Items from "./Items";

const ToDoItems = ({ todos, deleteItems }) => {
  return (
    <>
      {todos.map((items) => (
        <Items
          key={items.id}
          todoId={items.id}
          todoTitle={items.title}
          todoDate={items.date}
          todoComplete={items.completed ? "Done" : "Pending"}
          deleteItems={deleteItems}
        />
      ))}
    </>
  );
};
export default ToDoItems;
