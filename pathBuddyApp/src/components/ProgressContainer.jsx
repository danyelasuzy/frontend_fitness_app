import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

const ProgressContainer = ({ userId, challengeId }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await fetch(
          `http://localhost:5173/api/progress/${userId}/${challengeId}` //We can change this to work with any host if necessary
        );
        const data = await response.json();
        if (response.ok) {
          setProgress(data.kilometers);
        } else {
          console.error("Error fetching progress:", data.message);
        }
      } catch (error) {
        console.error("Error fetching progress:", error.message);
      }
    };

    fetchProgress();
  }, [userId, challengeId]);

  return <ProgressBar percentage={progress} />;
};

export default ProgressContainer;
