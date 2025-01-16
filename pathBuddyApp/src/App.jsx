import React from "react";
import MainPage from "./components/MainPage/MainPage";
import WelcomePage from "./components/WelcomeUserPage/WelcomePage";
import ChooseChallengePage from "./components/choose-challenge-page/choose-challenge-page";

import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";

function App() {
	return (
		<>
			{/* <WelcomePage /> */}
			<Router>
				<Routes>
					{/* Temporary route for Choose Challenge Page */}
					<Route path="/choose-challenge" element={<ChooseChallengePage />} />

					{/* Redirect all unknown routes to the root ("/") */}
					<Route path="*" element={<Navigate to="/" />} />
					{/* <Route path="/" element={<MainPage />} /> */}
					{/* <Route path="/welcome-user" element={<WelcomePage />} /> */}
				</Routes>
			</Router>
		</>
	);
}

export default App;


