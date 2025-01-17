// Main content of user Welcome Page that we have after succesful login
import MediumDarkGreenButton from "../Buttons/MediumDarkGreen/MediumDarkGreenButton";
import styles from "./WelcomeMainContent.module.css";
import exampleIMG from "../../assets/Avatars/bear.png";

const WelcomeMainContent = () => {
	return (
		<section className={styles.welcomePageContent}>
			<div className={styles.userInfo}>
					<div>
						<img src={exampleIMG} alt="" />
					</div>
					<div>
						<h3>User name</h3>
						<h3>Age</h3>
						<h3>Location</h3>
						<h3>email</h3>
					</div>
				</div>
			<div className={styles.userProfile}>
				<div>
					<h3>Current route:</h3>
				</div>
				<div>
					<h3>Your badges</h3>
				</div>
			</div>
			<div className="buttons-div">
				<MediumDarkGreenButton> Chose challenge</MediumDarkGreenButton>
				<MediumDarkGreenButton> Add progress</MediumDarkGreenButton>
				<MediumDarkGreenButton> Check progress</MediumDarkGreenButton>
				<MediumDarkGreenButton> Check leaderboard</MediumDarkGreenButton>
				<MediumDarkGreenButton> See friends</MediumDarkGreenButton>
				<MediumDarkGreenButton> Quit Challenge</MediumDarkGreenButton>
				<MediumDarkGreenButton> Log out</MediumDarkGreenButton>
			</div>
		</section>
	);
};

export default WelcomeMainContent;
