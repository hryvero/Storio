import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      {/* Logo */}
      <div className={styles.header__logo}>
        <Image src="/logo.png" width={40} height={40} />
        <h2 className={styles.header__logo__text}>Storio</h2>
      </div>
      {/* Navigation */}
      <div className={styles.header__navigation}>
        <ul className={styles.header__list}>
          <li className={styles.header__item}>
            <a className={styles.header__link} href="#">
              Features
            </a>
          </li>
          <li className={styles.header__item}>
            <a className={styles.header__link} href="#">
              Pricing
            </a>
          </li>
          <li className={styles.header__item}>
            <a className={styles.header__link} href="#">
              Testimonials
            </a>
          </li>
          <li className={styles.header__item}>
            <a className={styles.header__link} href="#">
              Projects
            </a>
          </li>
        </ul>
      </div>
      {/* Authorization  */}
      <div className={styles.header__authorization}>
        <a className={styles.header__authorization__signin} href="#">
          Sign in
        </a>
        <button className={styles.header__authorization__create__button}>
          Create an account
        </button>
      </div>
    </div>
  );
};

export default Header;
