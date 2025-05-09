import styles from './OutlinedButton.module.css';

const OutlinedButton = ({ text, customClass, ...props }) => {
  return (
    <button className={`${styles.button} ${customClass}`} {...props}>
      {text}
    </button>
  );
};

export default OutlinedButton;
