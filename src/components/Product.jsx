
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../services/products";
import { useDispatch, useSelector } from "react-redux";
import { loadMore } from "../store/productSlice";
import { add } from "../store/cartSlice";
import { put } from "../store/favoriteSlice";
import { FaHeart } from "react-icons/fa";
import styles from "./Product.module.css";
import { TailSpin } from "react-loader-spinner";
import Popup from "./Popup";
import ErrorMessage from "./ErrorMessage";


function Product({
  headerTitle = "Featured Products",
  headerSubtitle = "BEST SELLER PRODUCTS",
  headerDescription = "Problems trying to resolve the conflict between",
  showLoadMore = true,
}) {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetProductsQuery();
  const { visibleItems } = useSelector((state) => state.products);
  const [popup, setPopup] = useState({ visible: false, product: null, message: "" });

  function handleLoadMore() {
    dispatch(loadMore());
  }

  function addToCart(product) {
    dispatch(add(product));
    showPopup(product, "Successfully added to cart");
  }

  function addToFavorite(product) {
    dispatch(put(product));
    showPopup(product, "Successfully added to wishlist");
  }

  function showPopup(product, message) {
    setPopup({ visible: true, product, message });
  }

  function closePopup() {
    setPopup({ visible: false, product: null, message: "" });
  }

  if (isLoading) {
    return (
      <div className={styles.loaderContainer}>
        <TailSpin
          height="80"
          width="80"
          color="#23A6F0"
          ariaLabel="loading"
        />
      </div>
    );
  }

  if (error) {
    return <p><ErrorMessage /></p>;
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.productTitle}>{headerTitle}</p>
          <h3 className={styles.productSubtitle}>{headerSubtitle}</h3>
          <p className={styles.productP}>{headerDescription}</p>
        </header>
        <ul className={styles.productList}>
          {data.products.slice(0, visibleItems).map((product) => (
            <li key={product.id} className={styles.productCard}>
              <Link
                to={`/ProductPage/${product.id}`}
                className={styles.cardNav}
              >
                <div className={styles.imageContainer}>
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className={styles.productImage}
                  />
                </div>
                <div className={styles.productInfo}>
                  <h5 className={styles.productName}>{product.title}</h5>
                  <p className={styles.subtitle}>{product.category}</p>
                  <div className={styles.priceContainer}>
                    <span className={styles.originalPrice}>
                      ${product.price}
                    </span>
                    <span className={styles.discountedPrice}>
                      {(
                        product.price -
                        (product.price * product.discountPercentage) / 100
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
              </Link>
              <div className={styles.actionButtons}>
                <button
                  className={styles.iconButton}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  className={`${styles.iconButton} ${styles.favoriteButton}`}
                  onClick={() => addToFavorite(product)}
                >
                  <FaHeart />
                </button>
              </div>
            </li>
          ))}
        </ul>
        {showLoadMore && (
          <div className={styles.loadmorebtn}>
            {visibleItems < data.products.length && (
              <button
                onClick={handleLoadMore}
                className={styles.loadmorebutton}
              >
                Load More Products
              </button>
            )}
          </div>
        )}
      </div>
      {popup.visible && (
        <Popup
          product={popup.product}
          message={popup.message}
          onClose={closePopup}
        />
      )}
    </section>
  );
}

export default Product;
