// Main content of user Welcome Page that we have after succesful login
import MediumDarkGreenButton from "../Buttons/MediumDarkGreen/MediumDarkGreenButton";
import styles from "./WelcomeMainContent.module.css";

const WelcomeMainContent = () => {

	return (
		<section className={styles.welcomePageContent}>
			<div className={styles.userProfile}>
				<div className={styles.userInfo}>
					<div>
						<img src="" alt="" />
					</div>
					<div>
						<h3>User name</h3>
						<h3>Age</h3>
						<h3>Location</h3>
						<h3>email</h3>
					</div>
				</div>
				<div>

				</div>
				<div></div>
			</div>
			<div className="buttons-div">
				<MediumDarkGreenButton> Chose challenge</MediumDarkGreenButton>
				<MediumDarkGreenButton> Add progress</MediumDarkGreenButton>
				<MediumDarkGreenButton> Check progress</MediumDarkGreenButton>
				<MediumDarkGreenButton> Check leaderboard</MediumDarkGreenButton>
				<MediumDarkGreenButton> See friends</MediumDarkGreenButton>
				<MediumDarkGreenButton> Quit Challenge</MediumDarkGreenButton>
			</div>
			
		</section>
	);
};

export default WelcomeMainContent;
