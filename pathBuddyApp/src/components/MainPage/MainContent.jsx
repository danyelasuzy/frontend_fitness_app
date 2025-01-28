import LargeDarkGreenButton from "../Buttons/LargeDarkGreen/LargeDarkGreenButton";
import LargeLightGreenButton from "../Buttons/LargeLightGreen/LargeLightGreenButton";
import styles from "./MainContent.module.css";
import useModalManager from "../Modal/useModalManager";
import Modal from "../Modal/Modal";
import LoginForm from "./LoginForm";
import JoinUsForm from "./JoinUsForm";

const MainContent = () => {
	const {
		isOpen: isLoginOpen,
		openModal: openLoginModal,
		closeModal: closeLoginModal,
	} = useModalManager();
	const {
		isOpen: isJoinUsOpen,
		openModal: openJoinUsModal,
		closeModal: closeJoinUsModal,
	} = useModalManager();

	return (
		<div className={styles.contentDiv}>
			<p>
				<q>
					Get motivated, challenge yourself, and find friends – your path starts
					here!
				</q>
			</p>
			<div className={styles.loginButtonsContainer}>
			<LargeLightGreenButton onClick={openLoginModal}>
				Login
			</LargeLightGreenButton>
			{isLoginOpen && (
				<Modal onClose={closeLoginModal} contentClass={styles.loginModalStyle}>
					<LoginForm />
				</Modal>
			)}
			<LargeDarkGreenButton onClick={openJoinUsModal}>
				{" "}
				Join us!
			</LargeDarkGreenButton>
			{isJoinUsOpen && (
				<Modal onClose={closeJoinUsModal} contentClass={styles.registerModalStyle}>
					<JoinUsForm />
				</Modal>
			)}
			</div>
			<h2>Check out our challenges!</h2>
			{/* tu slider z challengami */}
		</div>
	);
};
export default MainContent;
