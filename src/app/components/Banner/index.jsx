import React from "react";
import styles from "./styles.module.scss";

const Banner = ({ bannerText, textLocation }) => {
  return (
    <div
      className={
        `${textLocation}` == "center" ? styles.banner_center : styles.banner
      }
    >
      <h2
        className={
          `${bannerText.className}` == "large"
            ? styles.banner__title_size_l
            : styles.banner__title
        }
      >
        {bannerText.title}
      </h2>
      <p className={styles.banner__description}>{bannerText.description}</p>
    </div>
  );
};

export default Banner;
