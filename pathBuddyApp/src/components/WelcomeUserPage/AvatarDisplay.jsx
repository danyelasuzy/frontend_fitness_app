import { useState, useEffect } from "react";
import useModalManager from "../Modal/useModalManager";
import Modal from "../Modal/Modal";
import styles from "./AvatarDisplay.module.css";

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
		const userData = JSON.parse(localStorage.getItem("user"));
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
		const userData = JSON.parse(localStorage.getItem("user")) || {};
		userData.avatarUrl = selectedAvatar;
		localStorage.setItem("user", JSON.stringify(userData));

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
		<div className={styles.avatarContainer}>
			{/* Show avatar from DB or placeholder */}
			{avatar ? (
				<img src={avatar} alt="User Avatar" className={styles.avatarImage} />
			) : (
				<div className={styles.avatarPlaceholder} onClick={openAvatarsModal}>
					Choose Avatar
				</div>
			)}

			{/* Modal to choose our beautiful avatars */}
			{isAvatarsOpen && (
				<Modal
					onClose={closeAvatarsModal}
					contentClass={styles.avatarsModalStyle}
				>
					<div className={styles.avatarSelection}>
						{avatarsCollection.map((avatar, index) => (
							<img
								key={index}
								src={avatar}
								alt={`Avatar ${index}`}
								className={styles.avatarOption}
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
