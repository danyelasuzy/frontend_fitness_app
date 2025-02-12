// import SmallDarkGreenButton from "../Buttons/SmallDarkGreen/SmallDarkGreenButton";
// import MediumLightGreenButton from "../Buttons/MediumLightGreen/MediumLightGreenButton";
// import SmallLightBlueButton from "../Buttons/SmallLightBlue/SmallLightBlueButton";
// import LargeDarkGreenButton from "../Buttons/LargeDarkGreen/LargeDarkGreenButton";
// import "./choose-challenge-page.css";
import SmallDarkGreenButton from "../Buttons/SmallDarkGreen/SmallDarkGreenButton";
import ChallengeList from "./components/ChallengeList";
//import "./choose-challenge-page.css"; ! CONVERTED TO TAILWIND CSS

const ChooseChallengePage = () => {
  return (
    <div className="bg-[#efe3c2] min-h-screen flex flex-col items-center">
      <div className="mt-5 flex flex-col items-center text-2xl">
        <h2 className="italic font-[lato] text-[#123524]">
          "A journey of a thousand miles starts with one step"
        </h2>
        <h1 className="font-[dynapuff] text-[#123524] text-4xl mt-2">Choose your Challenge</h1>
      </div>
      <ChallengeList />
      <div className="mt-5">
        <SmallDarkGreenButton onClick={() => window.history.back()}>Back</SmallDarkGreenButton>
      </div>
    </div>
  );
};

export default ChooseChallengePage;
