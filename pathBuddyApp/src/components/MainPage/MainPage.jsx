import Header from "../header/Header";
import MainContent from "./MainContent";
import styles from "./MainPage.module.css";

const MainPage = () => {
	return (
		<>
			<Header className={styles.headerDiv} />
			<MainContent className={styles.mainContentDiv} />
		</>
	);
};

export default MainPage;
