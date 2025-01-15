// Main content of user Welcome Page that we have after succesful login
import MediumDarkGreenButton from "../Buttons/MediumDarkGreen/MediumDarkGreenButton";


const WelcomeMainContent = () => {
	return (
		<>
			<div className="user-profile"></div>
			<div className="buttons-div">
				<MediumDarkGreenButton> Chose challenge</MediumDarkGreenButton>
				<MediumDarkGreenButton> Add progress</MediumDarkGreenButton>
				<MediumDarkGreenButton> Check progress</MediumDarkGreenButton>
				<MediumDarkGreenButton> Check leaderboard</MediumDarkGreenButton>
				<MediumDarkGreenButton> See friends</MediumDarkGreenButton>
				<MediumDarkGreenButton> Quit Challenge</MediumDarkGreenButton>
			</div>
			
		</>
	);
};

export default WelcomeMainContent;
