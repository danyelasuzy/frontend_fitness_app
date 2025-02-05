import React from "react";
//import styles from "./Modal.module.css";

const Modal = ({ onClose, children, contentClass = "" }) => {
	return (
		<div className="fixed top-0 left-0 w-full h-full bg-[#00000080] bg-opacity-50 flex justify-center items-center" 
				onClick={onClose}>
			<div
				className={`relative shadow-lg ${contentClass}`}
				onClick={(e) => e.stopPropagation()}
			>
				<button className="absolute top-2 right-2 bg-none border-none text-lg cursor-pointer text-[#123524] w-5 h-5"
				onClick={onClose}>
					X
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
