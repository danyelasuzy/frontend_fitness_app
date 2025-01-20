// import SmallDarkGreenButton from "../Buttons/SmallDarkGreen/SmallDarkGreenButton";
// import MediumLightGreenButton from "../Buttons/MediumLightGreen/MediumLightGreenButton";
// import SmallLightBlueButton from "../Buttons/SmallLightBlue/SmallLightBlueButton";
// import LargeDarkGreenButton from "../Buttons/LargeDarkGreen/LargeDarkGreenButton";
// import "./choose-challenge-page.css";
import SmallDarkGreenButton from "../Buttons/SmallDarkGreen/SmallDarkGreenButton";
import ChallengeList from "./components/ChallengeList";
import "./choose-challenge-page.css";

const ChooseChallengePage = () => {
  return (
    <>
      <div className="title">
        <h2 className="quote">
          &quot;A journey of a thousand miles starts with one step&quot;
        </h2>
        <h1 className="page-title">Choose your Challenge</h1>
      </div>
      <ChallengeList />
      <div>
        <SmallDarkGreenButton>Back</SmallDarkGreenButton>
      </div>
    </>
  );
};

export default ChooseChallengePage;
