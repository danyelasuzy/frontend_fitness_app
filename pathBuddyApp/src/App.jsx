import MainPage from "./components/MainPage/MainPage";
import WelcomePage from "./components/WelcomeUserPage/WelcomePage";
// import ChallengeLandingPage from './components/MainPage/challenge-landing-page/challenge-landing-page';

import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
// import MapLocation from "./components/MainPage/choose-challenge-page/choose-challenge-page";

function App() {
	return (
		<>
			<WelcomePage />
			<Router>
				<Routes>
					{/*Challenge Page*/}
					{/* <Route path="/challenges" element={<MapLocation />} /> */}
					{/*Redirect all unknown routes to the root ("/") */}
					<Route path="*" element={<Navigate to="/" />} />
					{/* <Route path="/" element={<MainPage />} /> */}
					{/* <Route path="/welcome-user" element={<WelcomePage />} /> */}
				</Routes>
			</Router>
		</>
	);
}
export default App;
