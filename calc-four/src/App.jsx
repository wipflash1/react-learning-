import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import ButtonContainer from "./component/ButtonContainer";
import Display from "./component/Display";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    console.log(buttonText);
  };
  return (
    <>
      <h1> Calculator Project </h1>
      <div classNameName NameName={styles.container}>
        <Display displayValue={calVal}></Display>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
