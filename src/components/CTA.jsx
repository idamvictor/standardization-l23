import styles from "./CTA.module.css";
import CTAimg from "../assets/images/CTAimg.png"

export default function CTA() {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.section}>
        <img
          loading="lazy"
          src={CTAimg}
          alt=""
          className={styles.image}
        />
        <h1 className={styles.heading}>Designing Better Experience</h1>
        <p className={styles.subHeading}>
          Problems trying to resolve
          <br />
          the conflict between
        </p>
        <p className={styles.description}>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </p>
        <p className={styles.price}>$16.48</p>
        <button className={styles.button} tabIndex="0">
          ADD YOUR CALL TO ACTION
        </button>
      </section>
    </main>
  );
} 
