// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useGetProductDetailQuery } from "../services/products";
// import { add } from "../store/cartSlice";
// import { put } from "../store/favoriteSlice";
// import { FaCartPlus, FaEye } from "react-icons/fa";
// import { CiHeart } from "react-icons/ci";
// import { useState } from "react";
// import styles from "./ProductDetail.module.css";
// import StarRating from "./StarRating";
// import { TailSpin } from "react-loader-spinner";

// function ProductDetail() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { data: product, error, isLoading } = useGetProductDetailQuery(id);
//   const favoriteItems = useSelector((state) => state.favorite);
//   const addedItems = useSelector((state) => state.cart);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   function addToCart(item) {
//     dispatch(add(item));
//   }

//   function addToFavorite(item) {
//     dispatch(put(item));
//   }

//   function isAdded(item) {
//     return addedItems.some((addItem) => addItem.id === item.id);
//   }

//   function isFavorite(item) {
//     return favoriteItems.some((favItem) => favItem.id === item.id);
//   }

//   function handlePreviousImage() {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
//     );
//   }

//   function handleNextImage() {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
//     );
//   }

//   function handleThumbnailClick(index) {
//     setCurrentImageIndex(index);
//   }

//   if (isLoading) {
//     return (
//       <div className={styles.loaderContainer}>
//         <TailSpin
//           height="80"
//           width="80"
//           color="#23A6F0"
//           ariaLabel="loading"
//         />
//       </div>
//     );
//   }

//   if (error) {
//     return <p>Something went wrong, try again later.</p>;
//   }

//   if (!product) {
//     return null;
//   }

//   const colors = [
//     { style: styles.colorPrimary },
//     { style: styles.colorSuccess },
//     { style: styles.colorAlert },
//     { style: styles.colorDark },
//   ];

//   return (
//     <>
//       <main className={styles.mainWrapper}>
//         <section className={styles.container}>
//           <div className={styles.imageColumn}>
//             <figure className={styles.imageFigure}>
//               <img
//                 loading="lazy"
//                 src={product.images[currentImageIndex]}
//                 alt={`Product ${currentImageIndex + 1}`}
//                 className={styles.productImage}
//               />
//               <button
//                 onClick={handlePreviousImage}
//                 className={styles.arrowButton}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="45"
//                   viewBox="0 0 24 45"
//                   fill="none"
//                 >
//                   <g clip-path="url(#clip0_1_4553)">
//                     <path
//                       fill-rule="evenodd"
//                       clip-rule="evenodd"
//                       d="M23.4993 44.3019C23.341 44.4597 23.1529 44.585 22.9458 44.6704C22.7387 44.7558 22.5167 44.7998 22.2925 44.7998C22.0683 44.7998 21.8463 44.7558 21.6392 44.6704C21.4321 44.5849 21.244 44.4597 21.0857 44.3019L0.631107 23.9647C0.472368 23.8073 0.346428 23.6203 0.260496 23.4144C0.174566 23.2085 0.130333 22.9878 0.130333 22.7649C0.130333 22.5419 0.174566 22.3212 0.260496 22.1153C0.346428 21.9094 0.472368 21.7224 0.631107 21.565L21.0857 1.2278C21.4057 0.909569 21.8398 0.730789 22.2925 0.730789C22.7451 0.730789 23.1792 0.909569 23.4993 1.2278C23.8194 1.54603 23.9992 1.97765 23.9992 2.42769C23.9992 2.87774 23.8194 3.30935 23.4993 3.62759L4.24815 22.7649L23.4993 41.9021C23.658 42.0595 23.784 42.2466 23.8699 42.4525C23.9558 42.6584 24.0001 42.8791 24.0001 43.102C24.0001 43.3249 23.9558 43.5457 23.8699 43.7516C23.784 43.9575 23.658 44.1445 23.4993 44.3019Z"
//                       fill="grey"
//                     />
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_1_4553">
//                       <rect
//                         width="24"
//                         height="44.4706"
//                         fill="white"
//                         transform="translate(24 45) rotate(-180)"
//                       />
//                     </clipPath>
//                   </defs>
//                 </svg>
//               </button>
//               <button onClick={handleNextImage} className={styles.arrowButton}>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="45"
//                   viewBox="0 0 24 45"
//                   fill="none"
//                 >
//                   <g clip-path="url(#clip0_1_4550)">
//                     <path
//                       fill-rule="evenodd"
//                       clip-rule="evenodd"
//                       d="M0.565913 0.698096C0.724251 0.540269 0.912349 0.41505 1.11943 0.329612C1.32652 0.244174 1.54852 0.200195 1.77273 0.200195C1.99694 0.200195 2.21894 0.244174 2.42603 0.329612C2.63311 0.41505 2.82121 0.540269 2.97955 0.698096L23.4341 21.0353C23.5928 21.1927 23.7188 21.3797 23.8047 21.5856C23.8906 21.7915 23.9349 22.0122 23.9349 22.2351C23.9349 22.4581 23.8906 22.6788 23.8047 22.8847C23.7188 23.0906 23.5928 23.2776 23.4341 23.435L2.97955 43.7722C2.65948 44.0904 2.22538 44.2692 1.77273 44.2692C1.32009 44.2692 0.885981 44.0904 0.565913 43.7722C0.245845 43.454 0.0660322 43.0224 0.0660322 42.5723C0.0660322 42.1223 0.245845 41.6906 0.565913 41.3724L19.8171 22.2351L0.565913 3.09788C0.407175 2.94045 0.281233 2.75343 0.195302 2.54754C0.109371 2.34164 0.0651398 2.12091 0.0651398 1.89799C0.0651398 1.67507 0.109371 1.45434 0.195302 1.24844C0.281233 1.04254 0.407175 0.855525 0.565913 0.698096Z"
//                       fill="grey"
//                     />
//                   </g>
//                   <defs>
//                     <clipPath id="clip0_1_4550">
//                       <rect width="24" height="44.4706" fill="white" />
//                     </clipPath>
//                   </defs>
//                 </svg>
//               </button>
//             </figure>
//             <div className={styles.thumbnailContainer}>
//               {product.images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`Thumbnail ${index + 1}`}
//                   className={`${styles.thumbnail} ${
//                     index === currentImageIndex ? styles.activeThumbnail : ""
//                   }`}
//                   onClick={() => handleThumbnailClick(index)}
//                 />
//               ))}
//             </div>
//           </div>
//           <article className={styles.detailsColumn}>
//             <div className={styles.productDetailsWrapper}>
//               <h1 className={styles.productTitle}>{product.title}</h1>
//               <div className={styles.reviewsWrapper}>
//                 <StarRating rating={4} />
//                 <p className={styles.reviewCount}>
//                   {product.reviews.length} Reviews
//                 </p>
//               </div>
//               <p className={styles.price}>${product.price?.toFixed(2)}</p>
//               <div className={styles.availabilityWrapper}>
//                 <p className={styles.availabilityText}>Availability :</p>
//                 <p className={styles.availabilityStatus}>In Stock</p>
//               </div>
//               <hr className={styles.horizontalLine} />
//               <div className={styles.colorsWrapper}>
//                 {colors.map((color, index) => (
//                   <div key={index} className={color.style} />
//                 ))}
//               </div>
//               <div className={styles.optionsWrapper}>
//                 <button className={styles.selectOptionsButton}>
//                   Select Options
//                 </button>

//                 <button
//                   onClick={() => addToCart(product)}
//                   disabled={isAdded(product)}
//                   className={styles.iconButton}
//                 >
//                   <FaCartPlus
//                     className={`${styles.icon} ${
//                       isAdded(product) ? styles.added : ""
//                     }`}
//                   />
//                 </button>
//                 <button
//                   onClick={() => addToFavorite(product)}
//                   disabled={isFavorite(product)}
//                   className={styles.iconButton}
//                 >
//                   <CiHeart
//                     className={`${styles.icon} ${
//                       isFavorite(product) ? styles.favorited : ""
//                     }`}
//                   />
//                 </button>
//                 <button className={styles.eyeIconContainer}>
//                   <FaEye className={styles.eyeIcon} />
//                 </button>
//               </div>
//             </div>
//           </article>
//         </section>
//       </main>
//     </>
//   );
// }

// export default ProductDetail;

// ============================================================================= V2 ==========================================================

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductDetailQuery } from "../services/products";
import { add } from "../store/cartSlice";
import { put } from "../store/favoriteSlice";
import { FaCartPlus, FaEye } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import styles from "./ProductDetail.module.css";
import StarRating from "./StarRating";
import { TailSpin } from "react-loader-spinner";
import Popup from "./Popup";
import ErrorMessage from "./ErrorMessage";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: product, error, isLoading } = useGetProductDetailQuery(id);
  const favoriteItems = useSelector((state) => state.favorite);
  const addedItems = useSelector((state) => state.cart);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [popup, setPopup] = useState({
    visible: false,
    product: null,
    message: "",
  });

  function addToCart(item) {
    dispatch(add(item));
    showPopup(item, "Successfully added to cart");
  }

  function addToFavorite(item) {
    dispatch(put(item));
    showPopup(item, "Successfully added to wishlist");
  }

  function isAdded(item) {
    return addedItems.some((addItem) => addItem.id === item.id);
  }

  function isFavorite(item) {
    return favoriteItems.some((favItem) => favItem.id === item.id);
  }

  function handlePreviousImage() {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  }

  function handleNextImage() {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  }

  function handleThumbnailClick(index) {
    setCurrentImageIndex(index);
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
        <TailSpin height="80" width="80" color="#23A6F0" ariaLabel="loading" />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage />;
  }

  if (!product) {
    return null;
  }

  const colors = [
    { style: styles.colorPrimary },
    { style: styles.colorSuccess },
    { style: styles.colorAlert },
    { style: styles.colorDark },
  ];

  return (
    <>
      <main className={styles.mainWrapper}>
        <section className={styles.container}>
          <div className={styles.imageColumn}>
            <figure className={styles.imageFigure}>
              <img
                loading="lazy"
                src={product.images[currentImageIndex]}
                alt={`Product ${currentImageIndex + 1}`}
                className={styles.productImage}
              />
              <button
                onClick={handlePreviousImage}
                className={styles.arrowButton}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="45"
                  viewBox="0 0 24 45"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_4553)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.4993 44.3019C23.341 44.4597 23.1529 44.585 22.9458 44.6704C22.7387 44.7558 22.5167 44.7998 22.2925 44.7998C22.0683 44.7998 21.8463 44.7558 21.6392 44.6704C21.4321 44.5849 21.244 44.4597 21.0857 44.3019L0.631107 23.9647C0.472368 23.8073 0.346428 23.6203 0.260496 23.4144C0.174566 23.2085 0.130333 22.9878 0.130333 22.7649C0.130333 22.5419 0.174566 22.3212 0.260496 22.1153C0.346428 21.9094 0.472368 21.7224 0.631107 21.565L21.0857 1.2278C21.4057 0.909569 21.8398 0.730789 22.2925 0.730789C22.7451 0.730789 23.1792 0.909569 23.4993 1.2278C23.8194 1.54603 23.9992 1.97765 23.9992 2.42769C23.9992 2.87774 23.8194 3.30935 23.4993 3.62759L4.24815 22.7649L23.4993 41.9021C23.658 42.0595 23.784 42.2466 23.8699 42.4525C23.9558 42.6584 24.0001 42.8791 24.0001 43.102C24.0001 43.3249 23.9558 43.5457 23.8699 43.7516C23.784 43.9575 23.658 44.1445 23.4993 44.3019Z"
                      fill="grey"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_4553">
                      <rect
                        width="24"
                        height="44.4706"
                        fill="white"
                        transform="translate(24 45) rotate(-180)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button onClick={handleNextImage} className={styles.arrowButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="45"
                  viewBox="0 0 24 45"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_4550)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.565913 0.698096C0.724251 0.540269 0.912349 0.41505 1.11943 0.329612C1.32652 0.244174 1.54852 0.200195 1.77273 0.200195C1.99694 0.200195 2.21894 0.244174 2.42603 0.329612C2.63311 0.41505 2.82121 0.540269 2.97955 0.698096L23.4341 21.0353C23.5928 21.1927 23.7188 21.3797 23.8047 21.5856C23.8906 21.7915 23.9349 22.0122 23.9349 22.2351C23.9349 22.4581 23.8906 22.6788 23.8047 22.8847C23.7188 23.0906 23.5928 23.2776 23.4341 23.435L2.97955 43.7722C2.65948 44.0904 2.22538 44.2692 1.77273 44.2692C1.32009 44.2692 0.885981 44.0904 0.565913 43.7722C0.245845 43.454 0.0660322 43.0224 0.0660322 42.5723C0.0660322 42.1223 0.245845 41.6906 0.565913 41.3724L19.8171 22.2351L0.565913 3.09788C0.407175 2.94045 0.281233 2.75343 0.195302 2.54754C0.109371 2.34164 0.0651398 2.12091 0.0651398 1.89799C0.0651398 1.67507 0.109371 1.45434 0.195302 1.24844C0.281233 1.04254 0.407175 0.855525 0.565913 0.698096Z"
                      fill="grey"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_4550">
                      <rect width="24" height="44.4706" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </figure>
            <div className={styles.thumbnailContainer}>
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`${styles.thumbnail} ${
                    index === currentImageIndex ? styles.activeThumbnail : ""
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div>
          </div>
          <article className={styles.detailsColumn}>
            <div className={styles.productDetailsWrapper}>
              <h1 className={styles.productTitle}>{product.title}</h1>
              <div className={styles.reviewsWrapper}>
                <StarRating rating={4} />
                <p className={styles.reviewCount}>
                  {product.reviews.length} Reviews
                </p>
              </div>
              <p className={styles.price}>${product.price?.toFixed(2)}</p>
              <div className={styles.availabilityWrapper}>
                <p className={styles.availabilityText}>Availability :</p>
                <p className={styles.availabilityStatus}>In Stock</p>
              </div>
              <hr className={styles.horizontalLine} />
              <div className={styles.colorsWrapper}>
                {colors.map((color, index) => (
                  <div key={index} className={color.style} />
                ))}
              </div>
              <div className={styles.optionsWrapper}>
                <button className={styles.selectOptionsButton}>
                  Select Options
                </button>

                <button
                  onClick={() => addToCart(product)}
                  disabled={isAdded(product)}
                  className={styles.iconButton}
                >
                  <FaCartPlus
                    className={`${styles.icon} ${
                      isAdded(product) ? styles.added : ""
                    }`}
                  />
                </button>
                <button
                  onClick={() => addToFavorite(product)}
                  disabled={isFavorite(product)}
                  className={styles.iconButton}
                >
                  <CiHeart
                    className={`${styles.icon} ${
                      isFavorite(product) ? styles.favorited : ""
                    }`}
                  />
                </button>
                <button className={styles.eyeIconContainer}>
                  <FaEye className={styles.eyeIcon} />
                </button>
              </div>
            </div>
          </article>
        </section>
      </main>
      {popup.visible && (
        <Popup
          product={popup.product}
          message={popup.message}
          onClose={closePopup}
        />
      )}
    </>
  );
}

export default ProductDetail;

// ================================================= REVIEW BAR =================================================
function ReviewBar({ reviewCount }) {
  return (
    <div className={styles.reviewBarContainer}>
      <p className={styles.description}>Description</p>
      <p className={styles.description}>Additional Information</p>
      <p className={styles.description}>Reviews ({reviewCount})</p>
    </div>
  );
}