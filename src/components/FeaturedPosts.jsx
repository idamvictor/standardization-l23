import styles from "./FeaturedPosts.module.css";
import featuredPosts1 from "../assets/images/featuredPosts1.png";
import featuredPosts2 from "../assets/images/featuredPosts2.png";
import featuredPosts3 from "../assets/images/featuredPosts3.png";

export default function FeaturedPosts() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.practice}>Practice Advice</h2>
        <h1 className={styles.featured}>Featured Posts</h1>
      </header>
      <div className={styles.cardWrapper}>
        {[
          {
            imageSrc: featuredPosts1,
            imageAlt: "Featured post image",
            date: "22 April 2021",
            comments: "10",
            title: "Loudest à la Madison #1 (L'integral)",
            description:
              "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
          },
          {
            imageSrc: featuredPosts2,
            imageAlt: "Featured post image",
            date: "22 April 2021",
            comments: "10",
            title: "Loudest à la Madison #1 (L'integral)",
            description:
              "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
          },
          {
            imageSrc: featuredPosts3,
            imageAlt: "Featured post image",
            date: "22 April 2021",
            comments: "10",
            title: "Loudest à la Madison #1 (L'integral)",
            description:
              "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
          },
        ].map((feature, index) => (
          <article key={index} className={styles.card}>
            <div className={styles.cardImageContainer}>
              <img
                className={styles.cardImage}
                src={feature.imageSrc}
                alt={feature.imageAlt}
              />
              <span className={styles.newBadge}>NEW</span>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <span className={styles.source}>Google</span>
                <span className={styles.trending}>Trending</span>
                <span className={styles.new}>New</span>
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
              <div className={styles.cardMeta}>
                <time dateTime={feature.date} className={styles.date}>
                  {feature.date}
                </time>
                <div className={styles.comments}>
                  <img
                    className={styles.commentsIcon}
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/35b93ae37014bb865ad6b39025c20b3abf85fbdafb0add0b09f42937ad26edbc?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
                    alt=""
                  />
                  <span>{feature.comments} comments</span>
                </div>
              </div>
              <div className={styles.cardFooter}>
                <a href="#" className={styles.learnMore}>
                  Learn More
                </a>
                <img
                  className={styles.arrowIcon}
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c98845ae0ef678dfbbdb8317a67d4f5f7c5731a727e94dd218bb71449c4abd12?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
                  alt=""
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
