const Welcome = ({ todoItems }) => {
  return <>{todoItems.length === 0 && <p>Welcome to the App..</p>}</>;
};
export default Welcome;
