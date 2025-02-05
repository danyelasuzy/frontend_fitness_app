import { useLocation } from "react-router-dom";
import styles from "./challenge-landing-page.module.css";
import InfoBox from "./components/InfoBox";
import Map from "../../utils/map/Map";
import { useState } from "react";
import SmallDarkGreenButton from "../Buttons/SmallDarkGreen/SmallDarkGreenButton";

const ChallengePage = () => {

	const userData = JSON.parse(localStorage.getItem("userData"));
	const location = useLocation();
	console.log("Location State:", location.state);
	const { challenge } = location.state || {};

	const [progressKm, setProgressKm] = useState(0);

	if (!challenge || !challenge.startPoint || !challenge.endPoint) {
		return (
			<div>No challenge data available. Please select a valid challenge.</div>
		);
	}
	return (
		<>
			<div className={styles.TitleContainer}>
				<h1 className={styles.Title}>Challenge Route</h1>
				<h3 className={styles.ChallengeTitle}>{challenge.name}</h3>
			</div>
			<div className={styles.MainContainer}>
				<div className={styles.MapContainer}>
					<Map challenge={challenge} user={userData} progressKm={progressKm} setProgressKm={setProgressKm} />
				</div>
				<div className={styles.InfoBoxContainer}>
					<InfoBox challenge={challenge}  progressKm={progressKm} setProgressKm={setProgressKm} />
				</div>
			</div>
			<footer>
				<SmallDarkGreenButton onClick={() => window.history.back()}>
					Back
				</SmallDarkGreenButton>
			</footer>
		</>
	);
};
export default ChallengePage;
