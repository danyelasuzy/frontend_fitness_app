import React from 'react';
import styles from './SmallLightBlueButton.module.css';

const SmallLightBlueButton = ({onClick, children}) => {
    return(
        <button className={styles.SmallLightBlueButton} onClick={onClick}>
            {children}
        </button>
    );
};

export default SmallLightBlueButton;