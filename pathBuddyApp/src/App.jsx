import MainPage from "./components/MainPage/MainPage";
import WelcomePage from "./components/WelcomeUserPage/WelcomePage";
import ChooseChallengePage from "./components/choose-challenge-page/choose-challenge-page";
import ChallengePage from "./components/challenge-landing-page/challenge-landing-page";
import Map from "./utils/map/Map";

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
          {/* Redirect all unknown routes to the root ("/") */}
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<MainPage />} />
          {/* <WelcomePage /> */}
          <Route path="/welcome" element={<WelcomePage />} />
          {/* {Choose Challenge page} */}
          <Route path="/chooseChallenge" element={<ChooseChallengePage />} />
          {/* {Challenge Landing page with id of the challenge} */}
          <Route path="/challenge/:id" element={<ChallengePage />} />
          {/* {Page mock-up to work with the map} */}
          <Route path="/map" element={<Map />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
