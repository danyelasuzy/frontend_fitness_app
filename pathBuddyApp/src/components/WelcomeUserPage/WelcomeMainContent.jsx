// Main content of user Welcome Page that we have after succesful login
import MediumDarkGreenButton from "../Buttons/MediumDarkGreen/MediumDarkGreenButton";
import styles from "./WelcomeMainContent.module.css";
import AvatarDisplay from "./AvatarDisplay";
import DisplayPersolnalInfo from "./DisplayPersonalInfo";
import { useNavigate } from "react-router-dom";
// import Map from "../../utils/map/Map";

const WelcomeMainContent = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.welcomePageContent}>
			{/* Avatar with user info */}
			<section className={styles.userProfile}>
				<div>
					<AvatarDisplay />
				</div>
				<div className={styles.personalInfo}>
					<DisplayPersolnalInfo />
				</div>
			</section>
			<section className={styles.containerForBtnAndAchievemens}>
				{/* Map and badges */}

				<section className={styles.userAchievements}>
					<div>
						<h2 className="welcomeH2">Current route:</h2>
						<div className={styles.routeContainer}>
							{/* We need to set up props in map component */}
							{/* <Map /> */}
						</div>
					</div>
					<div>
						<h2 className="welcomeH2">Your badges:</h2>
						<div className={styles.badgesContainer}></div>
					</div>
				</section>
				<section className={styles.buttons}>
					<MediumDarkGreenButton onClick={() => navigate("/chooseChallenge")}>
						{" "}
						Chose challenge
					</MediumDarkGreenButton>
					<MediumDarkGreenButton onClick={() => navigate("/challenge/:id")}>
						{" "}
						Add progress
					</MediumDarkGreenButton>
					<MediumDarkGreenButton onClick={() => navigate("/challenge/:id")}>
						{" "}
						Check progress
					</MediumDarkGreenButton>
					<MediumDarkGreenButton> Check leaderboard</MediumDarkGreenButton>
					<MediumDarkGreenButton> See friends</MediumDarkGreenButton>
					<MediumDarkGreenButton> Quit Challenge</MediumDarkGreenButton>
					<MediumDarkGreenButton
						onClick={() => {
							localStorage.removeItem("authToken");
							localStorage.removeItem("userData");
							navigate("/");
						}}
					>
						{" "}
						Log out
					</MediumDarkGreenButton>
				</section>
			</section>
		</div>
	);
};

export default WelcomeMainContent;
