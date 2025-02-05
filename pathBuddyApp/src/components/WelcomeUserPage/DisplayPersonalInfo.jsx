import { useState, useEffect } from "react";
import AgeIcon from "../../assets/Icons/calendar-month.svg";
import LocationPin from "../../assets/Icons/map-pin.svg";
import MailIcon from "../../assets/Icons/mail.svg";
import axios from "axios";

const backendURL = import.meta.env.VITE_BACKEND_URL;

const DisplayUserPersonalInfo = () => {
	const [userData, setUserInfo] = useState(null);

	useEffect(() => {
		const storedUser = JSON.parse(localStorage.getItem("userData"));
		if (storedUser) {
			setUserInfo(storedUser);
		}
	}, []);

	useEffect(() => {
        if (userData) {        			
			const fetchRegisteredChallenge = async () => {
				const userId = userData._id;
				try {					
					const registeredChallenge = await axios.get(`${backendURL}/api/users/${userId}/currentChallenge`);
					console.log('registeredChallenge: ', registeredChallenge);

				} catch (error) {
					console.error("Error fetching data:", error);
				}
			}
			fetchRegisteredChallenge();				
        }
    }, [userData]);

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
