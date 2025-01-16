import React, { useState, useEffect } from "react";
import LogoImage from "../../assets/logo-img/LogopB.png";
import styles from "./WelcomePageHeader.module.css";

const WelcomePageHeader = () => {
	const [userName, setUserName] = useState("User");

	useEffect(() => {
		const storedName = localStorage.getItem("userName");
		if (storedName) {
			setUserName(storedName);
		}
	});

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
