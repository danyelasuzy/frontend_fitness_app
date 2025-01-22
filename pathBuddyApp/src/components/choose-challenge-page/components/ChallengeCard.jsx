import PropTypes from "prop-types";
import styles from "./ChallengeCard.module.css";
import SmallDarkGreenButton from "../../Buttons/SmallDarkGreen/SmallDarkGreenButton";
import { useState, useEffect } from "react";

const ChallengeCard = ({ challenge, onFindOutMore }) => {
	const [challengeImages, setChallengeImages] = useState(null);

	useEffect(() => {
		fetch("/challengesImages/routesImages.json")
			.then((res) => res.json())
			.then((data) => {
				setChallengeImages(data.routes); // Zapisujemy tylko obiekt `routes`
			})
			.catch((error) => console.error("Error fetching images:", error));
	}, []);

	if (!challengeImages) return null; // Unikamy błędów, jeśli `challengeImages` jeszcze się nie załadowało

	const firstWord = challenge.name.split(" ")[0].toLowerCase();
	console.log("First word:", firstWord);

	const imagePath = challengeImages.startPoint[firstWord] || null;
	console.log("Image path:", imagePath);

	return (
		<div className={styles.challengeCard}>
			<img
				src={imagePath}
				alt={challenge.name}
				className={styles.challengeCardImage}
			/>
			<div className={styles.challengeCardDetails}>
				<h2>{challenge.name}</h2>
				<p>
					<strong>Distance:</strong> {challenge.distance} km
				</p>
				<p>
					<strong>Difficulty:</strong> {challenge.difficulty}
				</p>
				<div className={styles.customButton}>
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
