import React from 'react';
import styles from './styles.module.scss'


const Banner = (props) => {

    const titleClassNames= `styles.banner__title  styles.banner__title${props.className}`

    return (
        <div className={styles.banner }>
            <h2 className={titleClassNames}>{props.title}</h2>
            <p className={styles.banner__description}>{props.description}</p>
        </div>
    );
}

export default Banner;
