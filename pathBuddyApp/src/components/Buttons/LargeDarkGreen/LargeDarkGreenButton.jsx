import React from 'react';
import styles from './LargeDarkGreenButton.module.css';

const LargeDarkGreenButton = ({onClick, children}) => {
    return(
        <button className={styles.LargeDarkGreenButton} onClick={onClick}>
            {children}
        </button>
    );
};

export default LargeDarkGreenButton;