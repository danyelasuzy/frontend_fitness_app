import React from 'react';
import styles from './MediumLightGreenButton.module.css';

const MediumLightGreenButton = ({onClick, children}) => {
    return(
        <button className={styles.MediumLightGreenButton} onClick={onClick}>
            {children}
        </button>
    );
};

export default MediumLightGreenButton;