import styles from "./MediumDarkGreenButton.module.css";

const MediumDarkGreenButton = ({ onClick, children }) => {
  return (
    <button className={styles.MediumDarkGreenButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default MediumDarkGreenButton;
