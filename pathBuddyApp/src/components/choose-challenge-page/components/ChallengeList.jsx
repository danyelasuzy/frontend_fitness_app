import { useEffect, useState } from "react";
import ChallengeCard from "./ChallengeCard";
import styles from "./ChallengeList.module.css";
import Modal from "../../Modal/Modal";
import useModalManager from "../../Modal/useModalManager";
import StartChallengeButton from "./StartChallangeButton";

const backendURL = import.meta.env.VITE_BACKEND_URL;

export const ChallengesList = () => {
	const [challenges, setChallenges] = useState([]);
	// const [localImages, setLocalImages] = useState({});//for local images
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [challengeImages, setChallengeImages] = useState(null);

	// States for Modals
	const { isOpen, openModal, closeModal } = useModalManager(false);
	const [selectedChallenge, setSelectedChallenge] = useState(null);

	useEffect(() => {
		fetch("/challengesImages/routesImages.json")
			.then((res) => res.json())
			.then((data) => {
				setChallengeImages(data.routes); // Przechowujemy `routes`
			})
			.catch((error) => console.error("Error fetching images:", error));
	}, []);

	useEffect(() => {
		const fetchChallenges = async () => {
			try {
				const response = await fetch(
					`${backendURL}/api/challenges/getAllChallenges`,
					{
						method: "GET",
						headers: { "Content-Type": "application/json" },
						credentials: "include",
					}
				);

				if (!response.ok) {
					const data = await response.json();
					throw new Error(data.message || "Failed to load challenges.");
				}

				const data = await response.json();
				console.log("Challenges fetched successfully:", data);
				setChallenges(data.data.challenges);
			} catch (err) {
				console.error("Error fetching challenges:", err);
				setError(
					err.message || "Something went wrong. Please try again later."
				);
			} finally {
				setLoading(false);
			}
		};

		fetchChallenges();
	}, []);

	
	const handleOpenModal = (challenge) => {
		if (!challengeImages) return;

		// First word from challange name to choose correct img
		const firstWord = challenge.name.split(" ")[0].toLowerCase();
		console.log("First word for modal:", firstWord);

		const imagePath = challengeImages.startPoint[firstWord] || null;
		console.log("Image path for modal:", imagePath);

		setSelectedChallenge({
			...challenge,
			img: imagePath 
		});

		openModal();
	};

	// Modal close handler
	const handleCloseModal = () => {
		setSelectedChallenge(null);
		closeModal();
	};

	if (loading) return <div>Loading challenges...</div>;
	if (error) return <div>{error}</div>;
	if (challenges.length === 0) return <div>No challenges found.</div>;

	return (
		<div className={styles.challengesList}>
			{challenges.map((challenge) => (
				<ChallengeCard
					key={challenge._id}
					challenge={challenge}
					onFindOutMore={() => handleOpenModal(challenge)}
				/>
			))}

			{/* Modal for detailed challenge info */}
			{isOpen && selectedChallenge && (
				<Modal
					onClose={handleCloseModal}
					contentClass={styles.customModalContent}
				>
					<div className={styles.selectedChallenge}>
						<h2>{selectedChallenge.name}</h2>
						<div className={styles.selectedCardImage}>
							<img src={selectedChallenge.img} alt={selectedChallenge.name} className={styles.routeImage}/>
						</div>
						<p>{selectedChallenge.description}</p>
						<div className={styles.distanceSelected}>
							<p>
								<strong>Distance:</strong> {selectedChallenge.distance} km
							</p>
							<p>
								<strong>Difficulty:</strong> {selectedChallenge.difficulty}
							</p>
						</div>
						<div className={styles.customStartButton}>
							<StartChallengeButton
								challengeId={selectedChallenge._id}
								challenge={selectedChallenge}
							>
								Start Challenge
							</StartChallengeButton>
						</div>
					</div>
				</Modal>
			)}
		</div>
	);
};

export default ChallengesList;
