const Message = ({ todos }) => {
  return todos.length === 0 && <p className="empty-message">No tasks yet. Add your first task above.</p>;
};
export default Message;
