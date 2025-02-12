import { useLocation } from "react-router-dom";
//import { useState } from "react";
import ProgressInput from "./ProgressInput";
import styles from "./InfoBox.module.css";

const InfoBox = ({ challenge, progressKm, setProgressKm }) => {
	const location = useLocation();

	if (!challenge || !challenge.distance) {
		return <div>No challenge data available</div>;
	}

	// Calculate remaining distance
	const distanceUntilDestination = challenge.distance - progressKm;
	// Calculate progress percentage (rounded to an integer)
	const progressPercentage = Math.min(
		Math.max(Math.floor((progressKm / challenge.distance) * 100), 0),
		100
	);
	return (
		<>
			{/* Input for Progress */}
			<div className="flex flex-row gap-5 items-center my-5">
				<h3 className="text-2xl text-[#123524]">Enter progress:</h3>
				<ProgressInput onProgressChange={setProgressKm} />
			</div>
			<div className="bg-[#66773380] w-full p-4 md:p-6 rounded-md shadow-[0_0_15px_0_black]">
				<p className="text-2xl text-[#123524]">
					Total Distance: <strong>{challenge.distance} km</strong>
				</p>
				<p className="text-2xl text-[#123524]"> 
					Progress: <strong>{progressKm} km</strong>
				</p>
				<p className="text-2xl text-[#123524]">
					Distance Until Destination:{" "}
					<strong>
						{distanceUntilDestination > 0
							? `${distanceUntilDestination} km`
							: "You have reached your destination!"}
					</strong>
				</p>
				<p className="text-2xl text-[#123524]">
					Progress Percentage: <strong>{progressPercentage}%</strong>
				</p>
				{/* Progress Bar */}
				<div className="mt-5 w-full bg-[#ddd] h-[30px] rounded-lg overflow-hidden">
					<div
						className="h-full transition-all duration-300 ease-in-out"
						style={{
							width: `${progressPercentage}%`,
							background:
								progressPercentage === 100 ? "greenyellow" : "green",
							height: "100%",
						}}
					></div>
				</div>
			</div>
		</>
	);
};
export default InfoBox;
