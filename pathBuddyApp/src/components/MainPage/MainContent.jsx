import LargeDarkGreenButton from "../Buttons/LargeDarkGreen/LargeDarkGreenButton";
import LargeLightGreenButton from "../Buttons/LargeLightGreen/LargeLightGreenButton";
//import styles from "./MainContent.module.css";
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
		<div className="my-10 px-5 py-5 flex flex-col items-center gap-5">
			<p>
				<q>
					Get motivated, challenge yourself, and find friends – your path starts
					here!
				</q>
			</p>
			<div className="flex flex-row gap-5">
				<LargeLightGreenButton onClick={openLoginModal}>
					Login
				</LargeLightGreenButton>
				{isLoginOpen && (
					<Modal onClose={closeLoginModal} contentClass="bg-[#efe3c2] text-[#123524] rounded-lg p-8 h-[40vh]">
						<LoginForm />
					</Modal>
				)}
				<LargeDarkGreenButton onClick={openJoinUsModal}>
					{" "}
					Join us!
				</LargeDarkGreenButton>
				{isJoinUsOpen && (
					<Modal onClose={closeJoinUsModal} contentClass="bg-[#efe3c2] text-[#123524] rounded-lg p-8">
						<JoinUsForm/>
					</Modal>
				)}
			</div>
			<h2 className="font-serif font-bold italic text-2xl text-[#123524]">Check out our challenges!</h2>
			{/* Slider with challenges */}
		</div>
	);
};
export default MainContent;
