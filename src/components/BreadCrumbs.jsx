import styles from "./BreadCrumbs.module.css";
import { FaAngleRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function BreadCrumb({ items }) {
  return (
    <nav className={styles.container}>
      <div className={styles.navbar}>
        {items.map((item, index) => (
          <div key={index} className={styles.breadcrumbItem}>
            <NavLink
              to={item.path}
              className={`${styles.menuItem} ${
                index === items.length - 1 ? styles.active : styles.inactive
              }`}
            >
              {item.label}
            </NavLink>
            {index < items.length - 1 && (
              <FaAngleRight className={styles.separatorIcon} />
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default BreadCrumb;
