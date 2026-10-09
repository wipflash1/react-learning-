import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("");

  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  const onButtonClicked = (ButtonText) => {
    if (ButtonText === "C") {
      setCalVal("");
    } else if (ButtonText === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      let newButtontext = calVal + ButtonText;
      setCalVal(newButtontext);
    }
    console.log(ButtonText);
  };
  return (
    <>
      <div classNameName NameName={styles.heading}>
        <h1>Calculator</h1>
      </div>
      <div classNameName NameName={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonContainer
          buttonNames={buttonNames}
          handleButtonClicked={onButtonClicked}
        ></ButtonContainer>
      </div>
    </>
  );
}

export default App;
