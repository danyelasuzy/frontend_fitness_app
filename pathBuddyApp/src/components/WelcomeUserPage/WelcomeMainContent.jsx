// Main content of user Welcome Page that we have after succesful login
import MediumDarkGreenButton from "../Buttons/MediumDarkGreen/MediumDarkGreenButton";
import styles from "./WelcomeMainContent.module.css";
import AgeIcon from "../../assets/Icons/calendar-month.svg";
import LocationPin from "../../assets/Icons/map-pin.svg";
import MailIcon from "../../assets/Icons/mail.svg";

const WelcomeMainContent = () => {
	return (
		<div className={styles.welcomePageContent}>
			{/* Avatar with user info */}
			<section className={styles.userProfile}>
				<div>
					<div aria-placeholder="choose avatar" className={styles.avatar}></div>
				</div>
				<div className={styles.personalInfo}>
					<h4>
						<img src={AgeIcon} alt="Icon for age" />
						Age
					</h4>
					<h4>
						<img src={LocationPin} alt="Location pin" />
						Location
					</h4>
					<h4>
						<img src={MailIcon} alt="Email icon" />
						email
					</h4>
				</div>
			</section>
			<section className={styles.containerForBtnAndAchievemens}>
				{/* Map and badges */}

				<section className={styles.userAchievements}>
					<div>
						<h2 className="welcomeH2">Current route:</h2>
						<div className={styles.routeContainer}></div>
					</div>
					<div>
						<h2 className="welcomeH2">Your badges:</h2>
						<div className={styles.badgesContainer}></div>
					</div>
				</section>
				<section className={styles.buttons}>
					<MediumDarkGreenButton> Chose challenge</MediumDarkGreenButton>
					<MediumDarkGreenButton> Add progress</MediumDarkGreenButton>
					<MediumDarkGreenButton> Check progress</MediumDarkGreenButton>
					<MediumDarkGreenButton> Check leaderboard</MediumDarkGreenButton>
					<MediumDarkGreenButton> See friends</MediumDarkGreenButton>
					<MediumDarkGreenButton> Quit Challenge</MediumDarkGreenButton>
					<MediumDarkGreenButton> Log out</MediumDarkGreenButton>
				</section>
			</section>
		</div>
	);
};

export default WelcomeMainContent;
