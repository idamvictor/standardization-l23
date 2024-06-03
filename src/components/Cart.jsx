import { useSelector, useDispatch } from "react-redux";
import styles from "./Cart.module.css";
import { remove, increaseQuantity, decreaseQuantity } from "../store/cartSlice";
import StarRating from "./StarRating";

function Cart({ showOrderSummary = true }) {
  // Accept showOrderSummary as a prop
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  const increaseItemQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const decreaseItemQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  // Compute total items
  const totalItems = products.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <div className={styles.cartContainer}>
        {products.length === 0 ? (
          <p className={styles.emptyMessage}>You have no items in your cart.</p>
        ) : (
          <div className={styles.cart}>
            <div className={styles.cartItems}>
              <h1 className={styles.cartTitle}>Shopping Cart</h1>
              <header className={styles.cartHeader}>
                <div className={styles.cartTh}>Item Details</div>
                <div className={styles.cartTh}>Quantity</div>
                <div className={styles.cartTh}>Price</div>
              </header>
              {products.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <div className={styles.imagePriceContainer}>
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className={styles.productImage}
                    />
                    <div className={styles.productDetails}>
                      <h2 className={styles.productName}>{product.title}</h2>
                      {product.stock && (
                        <p className={styles.inStock}>In Stock</p>
                      )}
                      <div className={styles.ratingReviewContainer}>
                        <StarRating rating={product.rating} />
                        <p className={styles.reviews}>
                          {product.reviews.length} Reviews
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.quantityControl}>
                    <button
                      className={styles.quantityButton}
                      onClick={() => decreaseItemQuantity(product.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 2"
                        fill="none"
                      >
                        <path
                          d="M0.71997 1.94024H11.2799C11.6776 1.94024 12 1.61789 12 1.22007C12 0.822351 11.6777 0.5 11.2799 0.5H0.71997C0.322351 0.500099 0 0.82245 0 1.22017C0 1.61789 0.322351 1.94024 0.71997 1.94024Z"
                          fill="#3A3C3E"
                        />
                      </svg>
                    </button>
                    <span className={styles.quantity}>{product.quantity}</span>
                    <button
                      className={`${styles.quantityButton} ${styles.addButton}`}
                      onClick={() => increaseItemQuantity(product.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.168 7.28782C11.5822 7.28782 11.918 6.95203 11.918 6.53782C11.918 6.1236 11.5822 5.78782 11.168 5.78782L6.78786 5.78782L6.78787 1.40771C6.78787 0.993501 6.45208 0.657715 6.03787 0.657715C5.62365 0.657715 5.28787 0.993501 5.28787 1.40771L5.28786 5.78782L0.907794 5.78782C0.49358 5.78782 0.157794 6.1236 0.157794 6.53782C0.157794 6.95203 0.49358 7.28782 0.907794 7.28782L5.28786 7.28782L5.28786 11.6679C5.28786 12.0821 5.62365 12.4179 6.03786 12.4179C6.45208 12.4179 6.78786 12.0821 6.78786 11.6679L6.78786 7.28782L11.168 7.28782Z"
                          fill="#FCFCFC"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className={styles.priceContainer}>
                    <p className={styles.productPrice}>
                      $
                      {(
                        (product.price -
                          (product.price * product.discountPercentage) / 100) *
                        product.quantity
                      ).toFixed(2)}
                    </p>
                    <p className={styles.productMul}>
                      $
                      {(
                        product.price -
                        (product.price * product.discountPercentage) / 100
                      ).toFixed(2)}{" "}
                      x {product.quantity} Item{product.quantity > 1 ? "s" : ""}
                    </p>
                  </div>

                  <div className={styles.removeContainer}>
                    <button
                      className={styles.removeButton}
                      onClick={() => removeFromCart(product.id)}
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
                      REMOVE
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {showOrderSummary && ( // Conditional rendering of OrderSummary based on showOrderSummary prop
              <OrderSummary products={products} totalItems={totalItems} />
            )}
          </div>
        )}
      </div>
    </>
  );
}

function OrderSummary({ products, totalItems }) {
  if (!products || products.length === 0) return null;

  const subtotal = products
    .reduce((sum, product) => {
      return (
        sum +
        (product.price - (product.price * product.discountPercentage) / 100) *
          product.quantity
      );
    }, 0)
    .toFixed(2);

  return (
    <aside className={styles.summary}>
      <div className={styles.summaryContent}>
        <div className={styles.summaryHeader}>
          <h2 className={styles.summaryTitle}>Order Summary</h2>
          <div className={styles.summaryItems}>
            {" "}
            {totalItems} Item{totalItems > 1 ? "s" : ""}
          </div>
        </div>
        <div className={styles.deliveryInfo}>
          <div className={styles.deliveryLabel}>Delivery Charges</div>
          <div className={styles.deliveryText}>
            Add your delivery address to checkout to see delivery charges.
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.subtotal}>
          <div className={styles.subtotalLabel}>Subtotal</div>
          <div className={styles.subtotalAmount}>
            <span>${subtotal}</span>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.total}>
          <div className={styles.totalLabel}>Total</div>
          <div className={styles.totalAmount}>
            <span>${subtotal}</span>
          </div>
        </div>
        <div className={styles.excludingText}>Excluding Delivery Charges</div>
        <button className={styles.checkoutButton}>Proceed to Checkout</button>
        <div className={styles.paymentMethods}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/537a2c9a3c627f053afa8e1a29f8ea3ad421c1bb4d0b393dab6f0e46845911dd?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
            alt="Payment Method 1"
            className={styles.paymentIcon}
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a0ea81d057a0108ef5b413c03383076c762b617bce9a8cab74d7cdd7866adfc?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
            alt="Payment Method 2"
            className={styles.paymentIcon}
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/364d1a3c88ac18d1a769d09fb6e401646169a444e5158d683660ba090311e013?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
            alt="Payment Method 3"
            className={styles.paymentIcon}
          />
        </div>
      </div>
    </aside>
  );
}

export default Cart;
