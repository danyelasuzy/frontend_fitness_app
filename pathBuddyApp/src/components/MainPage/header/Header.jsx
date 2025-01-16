import LogoImage from "../../../assets/logo-img/LogopB.png";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<div className={styles.logoDiv}>
			<img
				src={LogoImage}
				alt="Logo image presenting mountain and people walking to the top."
				className={styles.logo}
			/>
		</div>
	);
};

export default Header;
