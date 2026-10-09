const Message = ({ todoItems }) => {
  return todoItems.length === 0 && <h1> Enjoy your Day</h1>;
};
export default Message;
