import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import LargeDarkGreenButton from "../../Buttons/LargeDarkGreen/LargeDarkGreenButton";

const StartChallengeButton = ({ challengeId, challenge }) => {
	const navigate = useNavigate();
	const handleStartChallenge = () => {
		navigate(`/challenge/${challengeId}`, { state: { challenge } });
	};
	return (
		<LargeDarkGreenButton onClick={handleStartChallenge}>
			Start Challenge
		</LargeDarkGreenButton>
	);
};
StartChallengeButton.propTypes = {
	challengeId: PropTypes.string.isRequired,
	challenge: PropTypes.string.isRequired,
	// Enforces the requirement
};
export default StartChallengeButton;
