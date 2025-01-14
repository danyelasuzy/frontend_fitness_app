import WelcomePageHeader from "./WelcomePageHeader";
import WelcomeMainContent from "./WelcomeMainContent";
import SmallDarkGreenButton from "../Buttons/SmallDarkGreen/SmallDarkGreenButton";

const WelcomePage = () => {
	return (
		<>
			<WelcomePageHeader />
			<WelcomeMainContent />
			<footer>
				<SmallDarkGreenButton>Back</SmallDarkGreenButton>
			</footer>
		</>
	);
};

export default WelcomePage;
