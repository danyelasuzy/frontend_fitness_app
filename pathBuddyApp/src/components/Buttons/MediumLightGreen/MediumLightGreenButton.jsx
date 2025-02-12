import React from 'react';
//import styles from './MediumLightGreenButton.module.css'; ! CONVERTED TO TAILWIND CSS

const MediumLightGreenButton = ({onClick, children}) => {
    return(
        <button className="font-[lato] font-bold text-[#123524] bg-[#12352450] rounded-[5px] py-[10px] px-[20px] mt-[10px] border-none shadow-[2px_4px_6px_rgba(0,0,0,0.2)] text-[clamp(12px,2vw,14px)] cursor-pointer w-[140px] h-[40px] flex justify-center items-center overflow-hidden whitespace-nowrap"
                onClick={onClick}>
            {children}
        </button>
    );
};

export default MediumLightGreenButton;