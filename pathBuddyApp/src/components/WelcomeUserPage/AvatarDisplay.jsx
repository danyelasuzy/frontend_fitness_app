import { useState, useEffect } from "react";
import useModalManager from "../Modal/useModalManager";
import Modal from "../Modal/Modal";
//import styles from "./AvatarDisplay.module.css"; ! CONVERTED TO TAILWIND CSS

const AvatarDisplay = () => {
	const {
		isOpen: isAvatarsOpen,
		openModal: openAvatarsModal,
		closeModal: closeAvatarsModal,
	} = useModalManager();

	const [avatar, setAvatar] = useState(null);
	const [avatarsCollection, setAvatarsCollection] = useState([]);

	// Taking avatar from localStorage
	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem("userData"));
		if (userData?.avatarUrl) {
			setAvatar(userData.avatarUrl);
		}
	}, []);

	// list of avatars from "public" folder with Avatars.json
	useEffect(() => {
		const fetchAvatars = async () => {
			try {
				const response = await fetch("/Avatars/avatars.json");
				const data = await response.json();
				setAvatarsCollection(data.avatars);
			} catch (error) {
				console.error("Error loading avatars:", error);
			}
		};

		fetchAvatars();
	}, []);

	// Choosing avatar logic
	const handleSelectAvatar = async (selectedAvatar) => {
		setAvatar(selectedAvatar);

		// Actualization in localstorage
		const userData = JSON.parse(localStorage.getItem("userData")) || {};
		userData.avatarUrl = selectedAvatar;
		localStorage.setItem("userData", JSON.stringify(userData));

		// Sending to backend!!
		try {
			const response = await fetch(
				"https://path-buddy-d047224ae5e0.herokuapp.com/api/users/update-avatar",
				{
					method: "PATCH",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("authToken")}`,
					},
					body: JSON.stringify({ avatarUrl: selectedAvatar }),
				}
			);

			if (!response.ok) {
				throw new Error("Failed to update avatar");
			}
		} catch (error) {
			console.error("Error updating avatar:", error);
		}

		closeAvatarsModal();
	};

	return (
		<div className="flex items-center justify-center w-[150px] h-[150px] bg-green-800/50 rounded-md cursor-pointer overflow-hidden ">
			{/* Show avatar from DB or placeholder */}
			{avatar ? (
				<img src={avatar} alt="User Avatar" className="w-[95%] h-[95%] object-contain rounded-md" />
			) : (
				<div className="flex items-center justify-center w-full h-full text-lg text-[#123524] font-lato" onClick={openAvatarsModal}>
					Choose Avatar
				</div>
			)}

			{/* Modal to choose our beautiful avatars */}
			{isAvatarsOpen && (
				<Modal
					onClose={closeAvatarsModal}
					contentClass="w-[80vw] bg-[#efe3c2] p-5 shadow-lg rounded-md"
				>
					<div className="flex flex-wrap justify-center gap-4">
						{avatarsCollection.map((avatar, index) => (
							<img
								key={index}
								src={avatar}
								alt={`Avatar ${index}`}
								className="w-[90px] h-[90px] cursor-pointer transition-transform transform hover:scale-110 object-contain shadow-md p-1 bg-green-800/30 rounded-md"
								onClick={() => handleSelectAvatar(avatar)}
							/>
						))}
					</div>
				</Modal>
			)}
		</div>
	);
};

export default AvatarDisplay;
