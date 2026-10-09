import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
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
    <>
      <div classNameName NameName={styles.buttonsContainer}>
        {buttonNames.map((items) => (
          <button classNameName NameName={styles.button}>
            {items}
          </button>
        ))}
      </div>
    </>
  );
};
export default ButtonsContainer;
