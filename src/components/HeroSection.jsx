// ======================================== HERO SECTION ================================================
import styles from "./HeroSection.module.css"
import hero1 from "../assets/images/hero1.png"
import hero2 from "../assets/images/hero2.png"
import hero3 from "../assets/images/hero3.png"
import hero4 from "../assets/images/hero4.png"

export default function HeroSection() {
  return (
    <section className={styles.mainSection}>
      <div className={styles.mainContainer}>
        <div className={styles.imageColumn}>
          <img
            loading="lazy"
            src={hero1}
            alt="First Item"
            className={styles.mainImg}
          />
          <div className={styles.itemDetails1}>
              <p className={styles.itemCount}>5 Items</p>
              <p className={styles.itemCategory}>FURNITURE</p>
              <button className={styles.itemButton}>Read More</button>
            </div>
        </div>
        <div className={styles.itemsColumn}>
          <article className={styles.itemCard}>
            <img
              src={hero2}
              alt="Second Item"
              className={styles.itemImg}
            />
            <div className={styles.itemDetails}>
              <p className={styles.itemCount}>5 Items</p>
              <p className={styles.itemCategory}>FURNITURE</p>
              <button className={styles.itemButton}>Read More</button>
            </div>
          </article>
          <div className={styles.subItemsRow}>
            <article className={styles.itemCard}>
              <img
                src={hero3}
                alt="Third Item"
                className={styles.itemImg}
              />
              <div className={styles.itemDetails}>
                <p className={styles.itemCount}>5 Items</p>
                <p className={styles.itemCategory}>FURNITURE</p>
                <button className={styles.itemButton}>Read More</button>
              </div>
            </article>
            <article className={styles.itemCard}>
              <img
                src={hero4}
                alt="Fourth Item"
                className={styles.itemImg}
              />
              <div className={styles.itemDetails}>
                <p className={styles.itemCount}>5 Items</p>
                <p className={styles.itemCategory}>FURNITURE</p>
                <button className={styles.itemButton}>Read More</button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}


