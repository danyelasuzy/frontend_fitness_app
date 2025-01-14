import logoImg from "../../assets/logo-img/logo.png";
import styles from "./Logo.module.css";

const Logo = ({ scale = 1 }) => {
	return (
		<div
			className={styles.logoContainer}
			style={{
				transform: `scale(${scale})`,
				transformOrigin: "center",
			}}
		>
			<img src={logoImg} alt="logo" className={styles.logoImage} />
			<h1 className={styles.appName}>pathBuddy</h1>
		</div>
	);
};

export default Logo;
