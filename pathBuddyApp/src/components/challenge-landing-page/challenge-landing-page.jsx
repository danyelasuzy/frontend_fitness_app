import { useLocation } from "react-router-dom";
import styles from "./challenge-landing-page.module.css";
import InfoBox from "./components/InfoBox";
import Map from "../../utils/map/Map";

const ChallengePage = () => {
  const location = useLocation();
  console.log("Location State:", location.state);
  const { challenge } = location.state || {};

  if (!challenge || !challenge.startPoint || !challenge.endPoint) {
    return (
      <div>No challenge data available. Please select a valid challenge.</div>
    );
  }

  return (
    <>
      <div className={styles.TitleContainer}>
        <h1 className={styles.Title}>Challenge Route</h1>
        <h3 className={styles.ChallengeTitle}>{challenge.name}</h3>
      </div>
      <div className={styles.MainContainer}>
        <div className={styles.MapContainer}>
          <Map />
        </div>
        <div className={styles.InfoBoxContainer}>
          <InfoBox />
        </div>
      </div>
    </>
  );
};
export default ChallengePage;
