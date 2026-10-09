import styles from "./Display.module.css";
const Display = ({ displayValue }) => {
  return (
    <div>
      <input
        classNameName
        NameName={styles.display}
        type="text"
        placeholder="Enter"
        value={displayValue}
        readOnly
      />
    </div>
  );
};
export default Display;
