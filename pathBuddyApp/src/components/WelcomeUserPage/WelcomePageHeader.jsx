import React, { useState, useEffect } from "react";
import LogoImage from "../../assets/logo-img/LogopB.png";
//import styles from "./WelcomePageHeader.module.css"; ! CONVERTED TO TAILWIND CSS

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
		<header className="flex items-center justify-between w-full p-4">
			<img
				src={LogoImage}
				alt="Logo image presenting mountain and people walking to the top."
				className="w-[100px] h-auto"
			/>
			<h2 className="font-[dynapuff] text-4xl font-semibold text-[#123524] w-1/2 text-center m-0 p-0">Welcome {userName} </h2>
		</header>
	);
};

export default WelcomePageHeader;
