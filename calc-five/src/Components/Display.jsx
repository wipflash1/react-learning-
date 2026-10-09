import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input
      type="text"
      placeholder="Enter"
      classNameName
      NameName={styles.display}
      value={displayValue}
      readOnly
    ></input>
  );
};
export default Display;
