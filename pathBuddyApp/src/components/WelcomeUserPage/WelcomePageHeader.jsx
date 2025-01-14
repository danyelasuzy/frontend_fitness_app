import Logo from "../logo/Logo";

const WelcomePageHeader = () => {
	return (
		<>
			<div>
				<Logo scale={0.7} />
			</div>
			<div>
                {/* Need to catch username from api/user */}
				<h2 className="welcome-message">Welcome USERNAME </h2>
			</div>
		</>
	);
};

export default WelcomePageHeader
