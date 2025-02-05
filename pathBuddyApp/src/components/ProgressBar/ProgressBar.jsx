import React from 'react';
//import styles from './ProgressBar.module.css'; CONVERTED TO TAILWIND CSS

const ProgressBar = ({ percentage }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-1">
            <div className="w-full h-7 bg-[#123534] rounded-md overflow-hidden relative">
                <div className="h-full bg-[#&f8f97] transition-all duration-300 ease-in-out"
                style={{width: `${percentage}%`}}/>
            </div>
            <span className="text-[#efe3c2 text-base font-bold font-[lato]">{percentage}%</span>
        </div>
    );
};

export default ProgressBar;