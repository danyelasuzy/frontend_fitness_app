import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import LargeDarkGreenButton from "../../Buttons/LargeDarkGreen/LargeDarkGreenButton";
import { useLocation } from "react-router-dom";

const StartChallengeButton = ({ challengeId, challenge }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const userData = JSON.parse(localStorage.getItem("userData"));

	const registerUserToChallenge = async (challengeId, userId) => {
		try {
			const response = await fetch(`https://path-buddy-d047224ae5e0.herokuapp.com/api/challenges/${challengeId}/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ userId }),
			});

			const data = await response.json();

			if (response.ok) {
				console.log("User registered successfully:", data);
			} else {
				console.error("Failed to register user:", data);				
			}
		} catch (error) {
			console.error("Error:", error);		
		}
	};

	const handleStartChallenge = async () => {
		const userId = userData?._id;		
		await registerUserToChallenge(challengeId, userId);
		navigate(`/challenge/${challengeId}`, { state: { challenge } });
	};

	return (
		<LargeDarkGreenButton onClick={handleStartChallenge} >
			Start Challenge
		</LargeDarkGreenButton>
	);
};

StartChallengeButton.propTypes = {
	challengeId: PropTypes.string.isRequired,
	challenge: PropTypes.object.isRequired,
};

export default StartChallengeButton;
