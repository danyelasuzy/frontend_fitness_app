import WelcomePageHeader from "./WelcomePageHeader";
import WelcomeMainContent from "./WelcomeMainContent";
import SmallDarkGreenButton from "../Buttons/SmallDarkGreen/SmallDarkGreenButton";

const WelcomePage = () => {
	return (
		<>
			<WelcomePageHeader />
			<WelcomeMainContent />
			<footer>
				<SmallDarkGreenButton onClick={() => window.history.back()}>
					Back
				</SmallDarkGreenButton>
			</footer>
		</>
	);
};

export default WelcomePage;
