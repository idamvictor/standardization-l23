

import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/favoriteSlice";
import styles from "./Cart.module.css";

function Favorite() {
  const products = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  function removeItem(id) {
    dispatch(remove(id));
  }

  return (
    <div>
      {products.length === 0 ? (
        <p className={styles.noItemsMessage}>
          You have no items in your favorites.
        </p>
      ) : (
        <>
          <div className={styles.cardTitle}>Wishlist</div>
          <ul className={styles.productList}>
            {products.map((item) => (
              <li key={item.id} className={styles.productCard}>
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className={styles.productImage}
                />
                <h3 className={styles.productName}>{item.title}</h3>
                <p className={styles.productPrice}>${item.price.toFixed(2)}</p>
                <div
                  onClick={() => removeItem(item.id)}
                  className={styles.removeButton}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3.99992 12.6667C3.99992 13.0203 4.14039 13.3594 4.39044 13.6095C4.64049 13.8595 4.97963 14 5.33325 14H10.6666C11.0202 14 11.3593 13.8595 11.6094 13.6095C11.8594 13.3594 11.9999 13.0203 11.9999 12.6667V4.66667H3.99992V12.6667ZM5.33325 6H10.6666V12.6667H5.33325V6ZM10.3333 2.66667L9.66659 2H6.33325L5.66659 2.66667H3.33325V4H12.6666V2.66667H10.3333Z"
                      fill="#23A6F0"
                    />
                  </svg>
                  <span className={styles.productBottonText}>Remove</span>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Favorite;
