import styles from "./Featured.module.css";
import featured1 from "../assets/images/featured1.svg"
import featured2 from "../assets/images/featured2.svg"
import featured3 from "../assets/images/featured3.svg"

// =================================== FEATURED SECTION ==================================================
const features = [
  {
    src: featured1,
    alt: "Smiling Woman",
    title: "Easy Wins",
    description: "Get your best looking smile now!",
  },
  {
    src: featured2,
    alt: "Smiling Man",
    title: "Concrete",
    description:
      "Defalcate is most focused in helping you discover your most beautiful smile",
  },
  {
    src: featured3,
    alt: "Smiling Couple",
    title: "Hack Growth",
    description: "Overcame any hurdle or any other problem.",
  },
];

export default function Featured() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.content}`}>
        <header className={styles.header}>
          <h2 className={styles.sectionTitle}>Featured Products</h2>
          <h3 className={styles.sectionSubtitle}>THE BEST SERVICES</h3>
          <p className={styles.sectionText}>
            Problems trying to resolve the conflict between
          </p>
        </header>
        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <article key={index} className={styles.featureCard}>
              <img
                loading="lazy"
                src={feature.src}
                alt={feature.alt}
                className={styles.featureImage}
              />
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
