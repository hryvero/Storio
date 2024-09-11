import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

const Header = ({actions}) => {
  return (
    <div className={styles.header}>
      {/* Logo */}
      <div className={styles.header__logo}>
        <Image src="/logo.png" width={40} height={40} />
        <h2 className={styles.header__text}>Storio</h2>
      </div>
      {/* Navigation */}
      <div className={styles.header__navigation}>
        <ul className={styles.header__list}>
          {actions? actions.map((action)=>{
           return(   
           <li key={action.id} className={styles.header__item}>
          <a className={styles.header__link} href="#">
            {action.title}
          </a>
        </li>) 
       
          }): null}
        </ul>
      </div>
      {/* Authorization  */}
      <div className={styles.header__authorization}>
        <a className={styles.header__signin} href="#">
          Sign in
        </a>
        <button className={styles.header__create__button}>
          Create an account
        </button>
      </div>
    </div>
  );
};

export default Header;
