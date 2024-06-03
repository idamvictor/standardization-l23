import styles from "./Blog.module.css";

function Blog() {
  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.container}>
          <section className={styles.textColumn}>
            <article className={styles.contentBlock}>
              <h2 className={styles.title}>the quick fox jumps over</h2>
              <p className={styles.paragraph}>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p className={styles.paragraph}>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p className={styles.paragraph}>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </article>
          </section>
          <aside className={styles.imageColumn}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a78613c1d6784870a2e6581f2635201c8847db56011313c002a9036ac49b8d3a?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
              alt="Descriptive text for the image"
              className={styles.image}
            />
          </aside>
        </div>
      </div>
    </>
  );
}

export default Blog;