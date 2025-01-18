import { useState } from "react";

const useModalManager = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		console.log("Opening modal...");
		setIsOpen(true);
	};
	const closeModal = () => setIsOpen(false);

	return { isOpen, openModal, closeModal };
};

export default useModalManager;
