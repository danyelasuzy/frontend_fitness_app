import React from 'react';
//import styles from './SmallLightBlueButton.module.css'; ! CONVERTED TO TAILWIND CSS

const SmallLightBlueButton = ({onClick, children}) => {
    return(
        <button className="font-[Lato] font-bold text-[#1F8F97] bg-[#1F8F9740] rounded-[5px] py-[10px] px-[20px] mt-[10px] border-none shadow-[2px_4px_6px_rgba(0,0,0,0.2)] text-[clamp(12px,2vw,14px)] cursor-pointer w-[98px] h-[36px] flex justify-center items-center overflow-hidden whitespace-nowrap"
                onClick={onClick}>
            {children}
        </button>
    );
};

export default SmallLightBlueButton;