import { useLocation } from "react-router-dom";
import { useState } from "react";
import ProgressInput from "./ProgressInput";
import styles from "./InfoBox.module.css";

const InfoBox = () => {
  const location = useLocation();
  const { challenge } = location.state || {};

  if (!challenge || !challenge.distance) {
    return <div>No challenge data available</div>;
  }

  const [progressKm, setProgressKm] = useState(0);

  // Calculate remaining distance
  const distanceUntilDestination = challenge.distance - progressKm;

  // Calculate progress percentage (rounded to an integer)
  const progressPercentage = Math.min(
    Math.max(Math.floor((progressKm / challenge.distance) * 100), 0),
    100
  );

  return (
    <>
      {/* Input for Progress */}
      <div className={styles.ProgresDetails}>
        <h3>Enter progress:</h3>
        <ProgressInput onProgressChange={setProgressKm} />
      </div>

      <div className={styles.BoxContainer}>
        <p>
          Total Distance: <strong>{challenge.distance} km</strong>
        </p>
        <p>
          Progress: <strong>{progressKm} km</strong>
        </p>
        <p>
          Distance Until Destination:{" "}
          <strong>
            {distanceUntilDestination > 0
              ? `${distanceUntilDestination} km`
              : "You have reached your destination!"}
          </strong>
        </p>
        <p>
          Progress Percentage: <strong>{progressPercentage}%</strong>
        </p>

        {/* Progress Bar */}
        <div className={styles.ProgresBar}>
          <div
            className={styles.ProgresBarFilled}
            style={{
              width: `${progressPercentage}%`,
              background: progressPercentage === 100 ? "blue" : "green",
              height: "100%",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default InfoBox;
