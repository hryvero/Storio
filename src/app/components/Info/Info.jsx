import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

const Info = ({ details, text }) => {
  return (
    <div className={styles.info__container}>
      {details && details.length > 0 ? (
        details.map((item) => (
          <div className={styles.info} key={item.id}>
            <Image
              src={item.src}
              width={55}
              height={55}
              alt="Details"
              className={styles.info__image}
            />
            <div className={styles.text}>
              <h3 className={styles.text__number}>{item.number}</h3>
              <p className={styles.text__name}>{item.name}</p>
            </div>
            {item.id !== details.length && (
              <div className={styles.divider}></div>
            )}
          </div>
        ))
      ) : (
        <p>No details available</p>
      )}
    </div>
  );
};

export default Info;
