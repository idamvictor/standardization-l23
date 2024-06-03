
import PropTypes from "prop-types";
import styles from "./StarRating.module.css";

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);

  return (
    <div className={styles.starRating}>
      {Array(filledStars)
        .fill()
        .map((_, index) => (
          <span key={`filled-${index}`} className={styles.filledStar}>★</span>
        ))}
      {halfStar && <span className={styles.halfStar}>★</span>}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <span key={`empty-${index}`} className={styles.emptyStar}>☆</span>
        ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
