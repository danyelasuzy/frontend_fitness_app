import { useState, useEffect } from "react";
import AgeIcon from "../../assets/Icons/calendar-month.svg";
import LocationPin from "../../assets/Icons/map-pin.svg";
import MailIcon from "../../assets/Icons/mail.svg";
import { useLocation } from "react-router-dom";

const DisplayUserPersonalInfo = () => {
	const [userData, setUserInfo] = useState(null);

	useEffect(() => {
		const storedUser = JSON.parse(localStorage.getItem("userData"));
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
