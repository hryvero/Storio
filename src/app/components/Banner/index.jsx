import React from 'react';
import styles from './styles.module.scss'


const Banner = (props) => {
    return (
        <div className={styles.banner}>
            <h2 className={styles.banner__title }>{props.title}</h2>
            <p className={styles.banner__description}>{props.description}</p>
        </div>
    );
}

export default Banner;
