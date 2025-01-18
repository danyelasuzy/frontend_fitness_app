import React, { useState, useEffect } from "react";
import LogoImage from "../../assets/logo-img/LogopB.png";
import styles from "./WelcomePageHeader.module.css";

const WelcomePageHeader = () => {
	const [userName, setUserName] = useState("User");

	useEffect(() => {
		const storedUser = localStorage.getItem("userData");
		if (storedUser) {
			const user = JSON.parse(storedUser);
			setUserName(user.name);
		}
	}, []);

	return (
		<header className={styles.welcomeHeader}>
			<img
				src={LogoImage}
				alt="Logo image presenting mountain and people walking to the top."
				className={styles.logo}
			/>
			<h2 className={styles.welcomeMessage}>Welcome {userName} </h2>
		</header>
	);
};

export default WelcomePageHeader;
