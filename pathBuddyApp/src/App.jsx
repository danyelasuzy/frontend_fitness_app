import React from "react";
import MainPage from "./components/MainPage/MainPage";
import WelcomePage from "./components/WelcomeUserPage/WelcomePage";
import ChooseChallengePage from "./components/choose-challenge-page/choose-challenge-page";
import ChallengeLandingPage from "./components/challenge-landing-page/challenge-landing-page"

import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<Routes>
					{/* <WelcomePage /> */}
          {<WelcomePage /> }
					{/* Redirect all unknown routes to the root ("/") */}
					<Route path="*" element={<Navigate to="/" />} />
					<Route path="/" element={<MainPage />} />
					<Route path="/welcome" element={<WelcomePage />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;


