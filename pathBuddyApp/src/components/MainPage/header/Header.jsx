import Logo from "../../logo/Logo";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<div className={styles.logoDiv}>
			<Logo />
		</div>
	);
};

export default Header;
