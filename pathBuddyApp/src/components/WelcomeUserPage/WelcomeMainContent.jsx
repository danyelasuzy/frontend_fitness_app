// Main content of user Welcome Page that we have after succesful login
import MediumDarkGreenButton from "../Buttons/MediumDarkGreen/MediumDarkGreenButton";
// import styles from "./WelcomeMainContent.module.css"; ! CONVERTED TO TAILWIND CSS
import AvatarDisplay from "./AvatarDisplay";
import DisplayPersolnalInfo from "./DisplayPersonalInfo";
import { useNavigate } from "react-router-dom";
import Map from "../../utils/map/Map";

const WelcomeMainContent = () => {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col items-center w-[95vw] min-h-screen p-5 box-border">
			{/* Avatar with user info */}
			<section className="flex w-full justify-start gap-5 items-center p-2 bg-[rgba(160,120,63,0.251)] rounded-md shadow-md">
				<div>
					<AvatarDisplay />
				</div>
				<div className="flex flex-col gap-2">
					<DisplayPersolnalInfo />
				</div>
			</section>
				{/* Map and badges */}
			<section className="flex flex-row justify-between gap-5 mt-5 w-full">
				<section className="p-2 flex flex-col gap-5 w-3/5 rounded-md shadow-md bg-[rgba(160,120,63,0.251)]">
					<div>
						<h2 className="font-lato text-lg italic text-[#123524]">Current route:</h2>
						<div className="w-[98%] h-[150px] bg-[hsla(75,40%,33%,0.5)] object-contain">
							<Map />
						</div>
					</div>
					<div>
						<h2 className="font-lato text-lg italic text-[#123524]">Your badges:</h2>
						<div className="w-[98%] h-[150px] border border-black"></div>
					</div>
				</section>
				{/* Buttons */}
				<section className="flex flex-col w-40 h-auto p-1 bg-[rgba(160,120,63,0.251)] items-center gap-1 rounded-md shadow-md">
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
