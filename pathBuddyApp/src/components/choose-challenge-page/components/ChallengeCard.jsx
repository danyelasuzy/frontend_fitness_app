import PropTypes from "prop-types";
//import styles from "./ChallengeCard.module.css";
import SmallDarkGreenButton from "../../Buttons/SmallDarkGreen/SmallDarkGreenButton";
import { useState, useEffect } from "react";

const ChallengeCard = ({ challenge, onFindOutMore }) => {
	const [challengeImages, setChallengeImages] = useState(null);

	useEffect(() => {
		fetch("/challengesImages/routesImages.json")
			.then((res) => res.json())
			.then((data) => {
				setChallengeImages(data.routes); // 
			})
			.catch((error) => console.error("Error fetching images:", error));
	}, []);

	if (!challengeImages) return null; 

	const firstWord = challenge.name.split(" ")[0].toLowerCase();
	console.log("First word:", firstWord);

	const imagePath = challengeImages.startPoint[firstWord] || null;
	console.log("Image path:", imagePath);

	return (
		<div className="flex flex-col items-center justify-between bg-white/70 border border-gray-300 rounded-xl shadow-lg w-[400px] overflow-hidden mt-10 transition-transform duration-300 hover:-translate-y-2">
			<img
				src={imagePath}
				alt={challenge.name}
				className="w-full h-[200px] object-cover"
			/>
			<div className="p-4 text-center">
				<h2 className="text-xl font-[Lato] italic text-gray-800">{challenge.name}</h2>
				<p className="mt-2 text-lg text-gray-600">
					<strong>Distance:</strong> {challenge.distance} km
				</p>
				<p className="text-lg text-gray-600">
					<strong>Difficulty:</strong> {challenge.difficulty}
				</p>
				<div className="flex items-center justify-center mt-4">
					<SmallDarkGreenButton onClick={onFindOutMore}>
						Find out more
					</SmallDarkGreenButton>
				</div>
			</div>
		</div>
	);
};

//Define propTypes
ChallengeCard.propTypes = {
	challenge: PropTypes.shape({
		img: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		distance: PropTypes.number.isRequired,
		difficulty: PropTypes.string.isRequired,
	}).isRequired,
	onFindOutMore: PropTypes.func.isRequired,
};

export default ChallengeCard;
