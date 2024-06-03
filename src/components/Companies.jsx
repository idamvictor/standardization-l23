import styles from "./Companies.module.css";
import company1 from "../assets/images/company1.png"
import company2 from "../assets/images/company2.png"
import company3 from "../assets/images/company3.png"
import company4 from "../assets/images/company4.png"
import company5 from "../assets/images/company5.png"
import company6 from "../assets/images/company6.png"

function Companies() {
  const images = [
    {
      src: company1,
      alt: "Image 1",
      className: styles.img,
    },
    {
      src: company2,
      alt: "Image 2",
      className: styles.img2,
    },
    {
      src: company3,
      alt: "Image 3",
      className: styles.img3,
    },
    {
      src: company4,
      alt: "Image 4",
      className: styles.img4,
    },
    {
      src: company5,
      alt: "Image 5",
      className: styles.img5,
    },
    {
      src: company6,
      alt: "Image 6",
      className: styles.img6,
    },
  ];

  return (
    <section className={styles.galleryContainer}>
      <div className={styles.galleryWrapper}>
        {images.map((image, index) => (
          <img
            key={index}
            loading="lazy"
            src={image.src}
            alt={image.alt}
            className={image.className}
          />
        ))}
      </div>
    </section>
  );
}

export default Companies;
