import React from 'react';
//import styles from './LargeDarkGreenButton.module.css';

const LargeDarkGreenButton = ({onClick, children}) => {
    return(
        <button className="font-[lato] font-bold text-[#efe3c2] bg-[#667733] rounded-md px-5 py-2 mt-2 border-none shadow-md shadow-black/20 text-[clamp(12px,2vw,20px)] cursor-pointer w-[134px] h-[53px] flex justify-center items-center overflow-hidden whitespace-nowrap"
                onClick={onClick}>
            {children}
        </button>
    );
};

export default LargeDarkGreenButton;