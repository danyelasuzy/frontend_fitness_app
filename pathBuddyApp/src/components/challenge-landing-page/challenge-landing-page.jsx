
import React from "react";
import MediumDarkGreenButton from "../Buttons/MediumDarkGreen/MediumDarkGreenButton";
import MediumLightGreenButton from "../Buttons/MediumLightGreen/MediumLightGreenButton";
import "./challenge-landing-page.css";
import SmallDarkGreenButton from "../Buttons/SmallDarkGreen/SmallDarkGreenButton";
import ProgressBar from "../ProgressBar/ProgressBar";
import inputBox1 from "../InputBoxes/inputBox1";

const ChallengeLandingPage = () => {
  /*const [distance, setDistance] = useState("");

  const handleAddProgressClick = () => {
    if (distance) {
      console.log("Progress submitted: ", distance);
      setDistance("");
    } else {
      console.error("Please enter your progress before submitting");
    }
  };*/
  return (
    <div>
      <div>
        <h1> Challenge Route </h1>
        <h2> Prague-Paris</h2>
        <img alt="Placeholder Map" />
        <MediumLightGreenButton>Show Friends</MediumLightGreenButton>
      </div>
      <div>
        <h3>Total Distance: </h3>
        <h3>Level: </h3>
        <h3>Distance Until Destination: </h3>
        <ProgressBar percentage={70} />
        <inputBox1 type="text" placeholder="Enter distance here" />
        <MediumDarkGreenButton onClick={handleAddProgressClick}>
          Add Progress
        </MediumDarkGreenButton>
        <h3>Conversion Calculator</h3>
        <input type="text" placeholder="Steps" />
        <h3>=</h3>
        <input type="text" placeholder="KM" />
        <SmallDarkGreenButton>Back</SmallDarkGreenButton>
      </div>
      <div>
        <img alt="Placeholder Avatar" />
        <h1>User Name</h1>
        <MediumDarkGreenButton>Choose Challenge</MediumDarkGreenButton>
        <MediumDarkGreenButton>See Leaderboard</MediumDarkGreenButton>
        <MediumDarkGreenButton>Friends</MediumDarkGreenButton>
        <MediumDarkGreenButton>Quit Challenge</MediumDarkGreenButton>
        <img alt="Photo from current route" />
      </div>
    </div>
  );
};

export default ChallengeLandingPage;
