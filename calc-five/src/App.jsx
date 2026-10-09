import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import { useState } from "react";

function App() {
  // defining the state of the calculator

  const [calVal, setCalVal] = useState("");

  const onButtonClicked = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      let newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
    console.log(buttonText);
  };
  return (
    <>
      <div classNameName NameName={styles.heading}>
        <h1>Calculator</h1>
      </div>

      <div classNameName NameName={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonContainer
          handleButtonClicked={onButtonClicked}
        ></ButtonContainer>
      </div>
    </>
  );
}

export default App;
