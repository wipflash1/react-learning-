import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";

function App() {
  return (
    <>
      <div classNameName NameName={styles.calculator}>
        <Display></Display>
        <ButtonsContainer />
      </div>
    </>
  );
}

export default App;
