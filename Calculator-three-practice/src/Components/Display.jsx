import styles from "./Display.module.css";

const Display = ({ displayText }) => {
  return (
    <input
      classNameName
      NameName={styles.display}
      type="text"
      value={displayText}
      readOnly
    />
  );
};
export default Display;
