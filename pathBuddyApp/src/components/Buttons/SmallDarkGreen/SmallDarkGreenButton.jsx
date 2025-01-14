import React from 'react';
import styles from './SmallDarkGreenButton.module.css';

const SmallDarkGreenButton = ({onClick, children}) => {
    return(
        <button className={styles.SmallDarkGreenButton} onClick={onClick}>
            {children}
        </button>
    );
};

export default SmallDarkGreenButton;