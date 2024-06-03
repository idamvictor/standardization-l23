import styles from "./Gallery.module.css";
import StarRating from "./StarRating";
import gallery1 from "../assets/images/gallery1.png"
import gallery2 from "../assets/images/gallery2.png"
import gallery3 from "../assets/images/gallery3.png"
import gallery4 from "../assets/images/gallery4.png"
import gallery5 from "../assets/images/gallery5.png"
import gallery6 from "../assets/images/gallery6.png"
import gallery7 from "../assets/images/gallery7.png"
import gallery8 from "../assets/images/gallery8.png"
import gallery9 from "../assets/images/gallery9.png"
import gallery10 from "../assets/images/gallery10.png"
 
export default function MyComponent() {
  const projects = [
    {
      src: gallery2,
      alt: "Project 1",
    },
    {
      src: gallery3,
      alt: "Project 2",
    },
    {
      src: gallery4,
      alt: "Project 3",
    },
    {
      src: gallery5,
      alt: "Gallery 1 Image 1",
    },
    {
      src: gallery6,
      alt: "Gallery 1 Image 2",
    },
    {
      src: gallery7,
      alt: "Gallery 2 Image 1",
    },
    {
      src: gallery8,
      alt: "Gallery 2 Image 2",
    },
    {
      src: gallery9,
      alt: "Gallery 3 Image 1",
    },
    {
      src: gallery10,
      alt: "Gallery 3 Image 2",
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.testimonials}>
          <h2 className={styles.testimonialHeader}>What they say about us</h2>
          <div className={styles.avatarContainer}>
            <figure className={styles.testimonialFigure}>
              <img
                loading="lazy"
                src={gallery1}
                alt="Testimonial"
                className={styles.testimonialImage}
              />
            </figure>

            <StarRating rating={4} />
            <p className={styles.testimonialText}>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            <p className={styles.testimonialAuthor}>Regina Miles</p>
            <p className={styles.testimonialRole}>Designer</p>
          </div>
        </div>

        <div className={styles.projects}>
          {projects.map((project, index) => (
            <img
              key={index}
              loading="lazy"
              src={project.src}
              alt={project.alt}
              className={styles.projectImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
