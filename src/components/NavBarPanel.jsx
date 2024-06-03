import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./NavBarPanel.module.css";
import Cart from "./Cart";
import Favorite from "./Favorite";

function NavBarPanel() {
  const cartProducts = useSelector((state) => state.cart);
  const favProducts = useSelector((state) => state.favorite);

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const popupRef = useRef(null);

  const handleIconClick = (content) => {
    setPopupContent(content);
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handleClosePopup();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <NavLink to="/" className={styles.navLink}>
            Bandage
          </NavLink>
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div
          className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}
        >
          <div className={styles.mainNav}>
            <NavLink to="/" className={styles.navLink} onClick={toggleMenu}>
              Products
            </NavLink>
            <div className={styles.dropdown}>
              <NavLink to="#" className={styles.navLink}>
                Shop{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                  >
                    <path
                      d="M1.42857 0.5L5 4.07143L8.57143 0.5L10 1.21429L5 6.21429L-3.12224e-08 1.21429L1.42857 0.5Z"
                      fill="#252B42"
                    />
                  </svg>
                </span>
              </NavLink>
              <div className={styles.dropdownContent}>
                <NavLink to="/cartPage" className={styles.navLink}>
                  Cart ({cartProducts.length})
                </NavLink>
                <NavLink to="/FavoritePage" className={styles.navLink}>
                  Favorite ({favProducts.length})
                </NavLink>
              </div>
            </div>
            <NavLink to="/" className={styles.navLink} onClick={toggleMenu}>
              About
            </NavLink>
            <NavLink to="/" className={styles.navLink} onClick={toggleMenu}>
              Blog
            </NavLink>
            <NavLink to="/" className={styles.navLink} onClick={toggleMenu}>
              Contact
            </NavLink>
            <NavLink to="/" className={styles.navLink} onClick={toggleMenu}>
              Pages
            </NavLink>
          </div>
          <div className={styles.cart}>
            <div className={styles.auth}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
              >
                <g clipPath="url(#clip0_1_4900)">
                  <path
                    d="M6.49976 6C7.29541 6 8.05847 5.68393 8.62108 5.12132C9.18369 4.55871 9.49976 3.79565 9.49976 3C9.49976 2.20435 9.18369 1.44129 8.62108 0.87868C8.05847 0.316071 7.29541 0 6.49976 0C5.70411 0 4.94104 0.316071 4.37844 0.87868C3.81583 1.44129 3.49976 2.20435 3.49976 3C3.49976 3.79565 3.81583 4.55871 4.37844 5.12132C4.94104 5.68393 5.70411 6 6.49976 6ZM8.49976 3C8.49976 3.53043 8.28904 4.03914 7.91397 4.41421C7.5389 4.78929 7.03019 5 6.49976 5C5.96932 5 5.46062 4.78929 5.08554 4.41421C4.71047 4.03914 4.49976 3.53043 4.49976 3C4.49976 2.46957 4.71047 1.96086 5.08554 1.58579C5.46062 1.21071 5.96932 1 6.49976 1C7.03019 1 7.5389 1.21071 7.91397 1.58579C8.28904 1.96086 8.49976 2.46957 8.49976 3ZM12.4998 11C12.4998 12 11.4998 12 11.4998 12H1.49976C1.49976 12 0.499756 12 0.499756 11C0.499756 10 1.49976 7 6.49976 7C11.4998 7 12.4998 10 12.4998 11ZM11.4998 10.996C11.4988 10.75 11.3458 10.01 10.6678 9.332C10.0158 8.68 8.78876 8 6.49976 8C4.20976 8 2.98376 8.68 2.33176 9.332C1.65376 10.01 1.50176 10.75 1.49976 10.996H11.4998Z"
                    fill="#23A6F0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_4900">
                    <rect
                      width="12"
                      height="12"
                      fill="white"
                      transform="translate(0.499756)"
                    />
                  </clipPath>
                </defs>
              </svg>{" "}
              Login/Register
            </div>
            <div
              onClick={() => handleIconClick(<Favorite />)}
              className={styles.navLink}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <g clipPath="url(#clip0_1_4917)">
                  <path
                    d="M8.50038 2.74805L7.78338 2.01105C6.10038 0.281049 3.01438 0.878049 1.90038 3.05305C1.37738 4.07605 1.25938 5.55305 2.21438 7.43805C3.13438 9.25305 5.04838 11.427 8.50038 13.795C11.9524 11.427 13.8654 9.25305 14.7864 7.43805C15.7414 5.55205 15.6244 4.07605 15.1004 3.05305C13.9864 0.878049 10.9004 0.280049 9.21738 2.01005L8.50038 2.74805ZM8.50038 15C-6.83262 4.86805 3.77938 -3.03995 8.32438 1.14305C8.38838 1.20105 8.45138 1.26305 8.50038 1.33005C8.55038 1.26405 8.61338 1.20105 8.67538 1.14305C13.2224 -3.04195 23.8324 4.86705 8.50038 15Z"
                    fill="#23A6F0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_4917">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.500366)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <sup>
                <span className={styles.badge}>{favProducts.length}</span>
              </sup>
            </div>
            <div
              onClick={() => handleIconClick(<Cart />)}
              className={styles.navLink}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
              >
                <g clipPath="url(#clip0_1_4895)">
                  <path
                    d="M0.500244 0H2.05024L2.73024 1.835L4.60024 7.356L3.95024 8.454C3.7091 8.84647 3.5816 9.3024 3.58424 9.767V11C3.58424 11.5304 3.79495 12.0391 4.17003 12.4142C4.5451 12.7893 5.05381 13 5.58424 13H15.5002V12H5.58424C5.3841 12 5.19216 11.921 5.05459 11.7834C4.91702 11.6458 4.83824 11.4539 4.83824 11.253V10.338L5.05424 9.968L12.2002 9.872L13.1202 8.204L5.68024 8.300L6.48024 7H14.5002C14.735 6.99938 14.9612 6.91295 15.1302 6.76095C15.2992 6.60895 15.397 6.40273 15.4002 6.184L15.9002 1.684C15.9142 1.56605 15.9022 1.44634 15.8651 1.33469C15.828 1.22304 15.7668 1.12251 15.6857 1.04055C15.6046 0.958594 15.504 0.897284 15.3923 0.86013C15.2807 0.822977 15.1609 0.810997 15.043 0.825L2.68224 1.012L2.14724 0H0.500244ZM5.49824 14C4.66824 14 3.99824 14.67 3.99824 15.5C3.99824 16.33 4.66824 17 5.49824 17C6.32824 17 6.99824 16.33 6.99824 15.5C6.99824 15.2348 6.89295 14.9804 6.70742 14.7949C6.52189 14.6094 6.26746 14.504 5.99824 14.504C5.72902 14.504 5.47458 14.6094 5.28906 14.7949C5.10353 14.9804 4.99824 15.2348 4.99824 15.5C4.99824 15.7652 5.10353 16.0196 5.28906 16.2051C5.47458 16.3906 5.72902 16.496 5.99824 16.496C6.26746 16.496 6.52189 16.3906 6.70742 16.2051C6.89295 16.0196 6.99824 15.7652 6.99824 15.5C6.99824 14.67 6.32824 14 5.49824 14ZM13.4982 14C12.6682 14 11.9982 14.67 11.9982 15.5C11.9982 16.33 12.6682 17 13.4982 17C14.3282 17 14.9982 16.33 14.9982 15.5C14.9982 15.2348 14.8929 14.9804 14.7074 14.7949C14.5219 14.6094 14.2675 14.504 13.9982 14.504C13.729 14.504 13.4746 14.6094 13.2891 14.7949C13.1035 14.9804 12.9982 15.2348 12.9982 15.5C12.9982 15.7652 13.1035 16.0196 13.2891 16.2051C13.4746 16.3906 13.729 16.496 13.9982 16.496C14.2675 16.496 14.5219 16.3906 14.7074 16.2051C14.8929 16.0196 14.9982 15.7652 14.9982 15.5C14.9982 14.67 14.3282 14 13.4982 14Z"
                    fill="#23A6F0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_4895">
                    <rect
                      width="17"
                      height="17"
                      fill="white"
                      transform="translate(0.500244)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <sup>
                <span className={styles.badge}>{cartProducts.length}</span>
              </sup>
            </div>
          </div>
        </div>
      </nav>

      {isPopupVisible && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup} ref={popupRef}>
            <button className={styles.closeButton} onClick={handleClosePopup}>
              &times;
            </button>
            {popupContent}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBarPanel;
