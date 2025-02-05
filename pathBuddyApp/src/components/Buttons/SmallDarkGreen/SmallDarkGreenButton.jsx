import React from 'react';
//import styles from './SmallDarkGreenButton.module.css'; ! CONVERTED TO TAILWIND CSS

const SmallDarkGreenButton = ({onClick, children}) => {
    return(
        <button className="font-[Lato] font-bold text-[#efe3c2] bg-[#667733] rounded-[5px] py-[10px] px-[20px] mt-[10px] border-none shadow-[2px_4px_6px_rgba(0,0,0,0.2)] text-[clamp(12px,2vw,14px)] cursor-pointer w-[108px] h-[31px] flex justify-center items-center overflow-hidden whitespace-nowrap"
                onClick={onClick}>
            {children}
        </button>
    );
};

export default SmallDarkGreenButton;