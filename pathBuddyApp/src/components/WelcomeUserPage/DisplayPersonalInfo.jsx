import { useState, useEffect } from "react";
import AgeIcon from "../../assets/Icons/calendar-month.svg";
import LocationPin from "../../assets/Icons/map-pin.svg";
import MailIcon from "../../assets/Icons/mail.svg";
import axios from "axios";

const DisplayUserPersonalInfo = () => {
	const [userData, setUserInfo] = useState(null);

	useEffect(() => {
		// const fetchRegisteredChallenge = async () => {
		// 	try {
		// 		const registeredChallenge = await axios.get("https://path-buddy-d047224ae5e0.herokuapp.com/api/users/registeredChallenge");

		// 	} catch (error) {
		// 		console.error("Error fetching data:", error);
		// 	}
		// }

		const storedUser = JSON.parse(localStorage.getItem("userData"));
		console.log('user data from local storage: ', storedUser)
		if (storedUser) {
			setUserInfo(storedUser);
		}
	}, []);

	if (!userData) {
		return <p>Loading user data...</p>; // Możesz dać spinner zamiast tekstu
	}

	const { age, location, email } = userData;

	return (
		<div>
			<h4>
				<img src={AgeIcon} alt="Icon for age" />
				{age}
			</h4>
			<h4>
				<img src={LocationPin} alt="Location pin" />
				{location}
			</h4>
			<h4>
				<img src={MailIcon} alt="Email icon" />
				{email}
			</h4>
		</div>
	);
};

export default DisplayUserPersonalInfo;
