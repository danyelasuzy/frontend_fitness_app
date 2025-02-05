import { useEffect, useState } from "react";
import ChallengeCard from "./ChallengeCard";
import styles from "./ChallengeList.module.css";
import Modal from "../../Modal/Modal";
import useModalManager from "../../Modal/useModalManager";
import StartChallengeButton from "./StartChallangeButton";

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
					"https://path-buddy-d047224ae5e0.herokuapp.com/api/challenges/getAllChallenges",
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
		<div className="flex flex-wrap gap-5 justify-center">
			{challenges.map((challenge) => (
				<ChallengeCard
					key={challenge._id}
					challenge={challenge}
					onFindOutMore={() => handleOpenModal(challenge)}
				/>
			))}

			{/* Modal for detailed challenge info */}
			{isOpen && selectedChallenge && (
				<Modal onClose={handleCloseModal}>
					
					<div className="flex flex-col items-center bg-[#eeeadc] w-[80vw] p-8 rounded-lg shadow-xl">
						<h2 className="text-3xl font-bold text-[#123524]">{selectedChallenge.name}</h2>
						<div className="w-[70%] my-4">
							<img src={selectedChallenge.img} alt={selectedChallenge.name} className="w-full h-auto object-cover shadow-lg"/>
						</div>
						<p className="text-xl text-[#123524]">{selectedChallenge.description}</p>
						<div className="flex gap-10 text-lg font-semibold text-[#123524] mt-4">
							<p>
								<strong>Distance:</strong> {selectedChallenge.distance} km
							</p>
							<p>
								<strong>Difficulty:</strong> {selectedChallenge.difficulty}
							</p>
						</div>
						<div className="mt-6">
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
