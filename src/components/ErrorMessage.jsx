import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.errorMessage}>
      <div className={styles.errorIcon}>
        <span role="img" aria-label="error">🚨</span>
      </div>
      <p>Something went wrong</p>
    </div>
  );
};

export default ErrorMessage;
