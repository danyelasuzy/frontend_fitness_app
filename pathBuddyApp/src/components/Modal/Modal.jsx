import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ onClose, children, contentClass = "" }) => {
	return (
		<div className={styles.modalOverlay} onClick={onClose}>
			<div
				className={`${styles.modalContent} ${contentClass}`}
				onClick={(e) => e.stopPropagation()}
			>
				<button className={styles.modalClose} onClick={onClose}>
					X
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
