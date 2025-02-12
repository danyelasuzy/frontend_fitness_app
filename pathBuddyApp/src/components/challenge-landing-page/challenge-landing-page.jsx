import { useLocation } from "react-router-dom";
//import styles from "./challenge-landing-page.module.css";
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
			<div className="flex flex-col items-center mb-10">
				<h1 className="text-6xl font-[dynapuff] text-[#123524]">Challenge Route</h1>
				<h3 className="font-[lato] italic text-3xl text-[#333] pt-4">{challenge.name}</h3>
			</div>
			<div className="flex flex-col w-full justify-center mb-8">
				<div className="w-[70vw] h-[50vh] shadow-[0_0_30px_0_black] mx-auto">
					<Map challenge={challenge} user={userData} progressKm={progressKm} setProgressKm={setProgressKm} />
				</div>
				<div className="flex flex-col w-[90%] mt-12 ml-8">
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
