import LogoImage from "../../../assets/logo-img/LogopB.png";
//import styles from "./Header.module.css"; ! CONVERTED TO TAILWIND

const Header = () => {
	return (
		<div className="w-screen flex flex-col items-center">
			<img
				src={LogoImage}
				alt="Logo image presenting mountain and people walking to the top."
				className="w-[200px] h-auto mt-8"
			/>
		</div>
	);
};

export default Header;
