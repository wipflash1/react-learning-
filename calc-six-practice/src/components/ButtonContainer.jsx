import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({ buttonNames, handleButtonClicked }) => {
  return (
    <div classNameName NameName={styles.buttonContainer}>
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
