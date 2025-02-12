import React from 'react';
//import styles from './LargeLightGreenButton.module.css';

const LargeLightGreenButton = ({onClick, children}) => {
    return(
        <button className="font-[lato] font-bold text-[#667733] bg-[#66773330] rounded-[5px] py-[10px] px-[20px] mt-[10px] border-none shadow-[2px_4px_6px_rgba(0,0,0,0.2)] text-[clamp(12px,2vw,20px)] cursor-pointer w-[134px] h-[53px] flex justify-center items-center overflow-hidden whitespace-nowrap"
                onClick={onClick}>
            {children}
        </button>
    );
};

export default LargeLightGreenButton;