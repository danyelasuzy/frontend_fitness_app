import LogoImage from "../../assets/logo-img/LogopB.png";
import styles from "./WelcomePageHeader.module.css";

const WelcomePageHeader = () => {
	return (
		<header className={styles.welcomeHeader}>
			<img
				src={LogoImage}
				alt="Logo image presenting mountain and people walking to the top." className={styles.logo}
			/>
			<h2 className={styles.welcomeMessage}>Welcome USERNAME </h2>
		</header>
	);
};

export default WelcomePageHeader;
