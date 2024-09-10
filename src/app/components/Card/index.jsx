import React from "react";
import styles from "./styles.module.css";

const Card = () => {
  return (
    <div>
      <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Features <span>-&gt;</span>
        </h2>
        <p>Explore feauters of Next.js.</p>
      </a>
    </div>
  );
};

export default Card;
