import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ percentage }) => {
    return (
        <div className='{styles.progressBarContainer}'>
            <div className='{styles.progressBar}'>
                <div className='{styles.progress}'
                style={{width: `${percentage}%`}}/>
            </div>
            <span className={styles.percentageText}>{percentage}%</span>
        </div>
    );
};

export default ProgressBar;