import React from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.imgBox}>
        <img
          src="https://cdn.dsmcdn.com/web/logo/ty-web.svg"
          className="brand"
        />
      </div>
      <div className={styles.inputBox}>
        <input
          type="text"
          placeholder="Aradığınız ürün,kategori veya markayı yazınız"
        />
        <FontAwesomeIcon icon={faSearch} className={styles["search-icon"]} />
      </div>
      <ul className={styles.list}>
        <li>
          <FontAwesomeIcon icon={faUser} className={styles["list-icon"]} />{" "}
          Hesabım
        </li>
        <li>
          <FontAwesomeIcon icon={faHeart} className={styles["list-icon"]} />{" "}
          Favorilerim
        </li>
        <li>
          <FontAwesomeIcon
            icon={faCartShopping}
            className={styles["list-icon"]}
          />{" "}
          Sepetim
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
