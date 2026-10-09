import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ handleButtonClicked }) => {
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
  return (
    <div classNameName NameName={styles.buttonsContainer}>
      {buttonNames.map((buttonNames) => (
        <button
          classNameName
          NameName={styles.button}
          onClick={() => handleButtonClicked(buttonNames)}
        >
          {buttonNames}
        </button>
      ))}
    </div>
  );
};
export default ButtonContainer;
