//import styles from "./MediumDarkGreenButton.module.css";

const MediumDarkGreenButton = ({ onClick, children }) => {
  return (
    <button className="font-[lato] text-[#efe3c2] bg-[#667733] rounded-[5px] py-[10px] px[20px] mt-[10px] border-none shadow-[2px_4px_6px_rgba(0,0,0,0.2)] text-[clamp(12px,2vw,14px)] cursor-pointer w-[140px] h-[40px] flex justify-center items-center overflow-hidden whitespace-nowrap" 
            onClick={onClick}>
      {children}
    </button>
  );
};

export default MediumDarkGreenButton;
