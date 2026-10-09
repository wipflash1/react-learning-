import styles from "./Display.module.css";
const Display = ({ displayValue }) => {
  return (
    <input
      classNameName
      NameName={styles.display}
      type="text"
      placeholder="Enter"
      value={displayValue}
      readOnly
    />
  );
};
export default Display;
