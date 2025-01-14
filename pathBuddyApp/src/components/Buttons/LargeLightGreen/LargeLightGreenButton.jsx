import React from 'react';
import styles from './LargeLightGreenButton.module.css';

const LargeLightGreenButton = ({onClick, children}) => {
    return(
        <button className={styles.LargeLightGreenButton} onClick={onClick}>
            {children}
        </button>
    );
};

export default LargeLightGreenButton;