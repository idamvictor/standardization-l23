import styles from "./Popup.module.css";

const Popup = ({ product, message, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.popupHeader}>
          <p>{message}</p>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.popupContent}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className={styles.productImage}
          />
          <div className={styles.popupDetails}>
            <h3 className={styles.productTitle}>{product.title}</h3>
            <p>${product.price?.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
