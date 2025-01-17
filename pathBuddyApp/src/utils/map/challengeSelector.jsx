import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Map from "./Map";

const ChallengeSelector = ({ user }) => {
  const [challenges, setChallenges] = useState([]); // All available challenges
  const [selectedChallenge, setSelectedChallenge] = useState(null); // Currently selected challenge
  const [userChallenge, setUserChallenge] = useState(null); // Challenge the user is currently registered for
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // Fetch challenges and user's current challenge
  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const challengeResponse = await axios.get(
          "https://path-buddy-d047224ae5e0.herokuapp.com/api/challenges"
        );
        setChallenges(challengeResponse.data.data);

        // Fetch the user's current challenge
        const userChallengeResponse = await axios.get(
          `https://path-buddy-d047224ae5e0.herokuapp.com/api/users/${user._id}/currentChallenge`
        );
        setUserChallenge(userChallengeResponse.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchChallenges();
  }, [user._id]);

  // Handle challenge registration
  const handleRegister = async (challengeId) => {
    try {
      const response = await axios.post(
        `https://path-buddy-d047224ae5e0.herokuapp.com/api/challenges/${challengeId}/register`,
        { userId: user._id }
      );

      if (response.status === 200) {
        alert("Registered successfully!");
        setUserChallenge(challenges.find((c) => c._id === challengeId));
      } else {
        alert(response.data.message || "Failed to register for the challenge.");
      }
    } catch (error) {
      console.error("Error registering:", error);
      alert("Error registering for the challenge. Please try again.");
    }
  };

  // Handle challenge selection from the dropdown
  const handleChallengeSelect = (e) => {
    const challengeId = e.target.value;
    const challenge = challenges.find((c) => c._id === challengeId);
    setSelectedChallenge(challenge);
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Display user's current challenge */}
          {userChallenge ? (
            <div>
              <h2>Your Current Challenge</h2>
              <h3>{userChallenge.name}</h3>
              <p>{userChallenge.description}</p>
              <p>
                Distance: {userChallenge.distance} km | Difficulty:{" "}
                {userChallenge.difficulty}
              </p>
              <div style={{ marginTop: "20px" }}>
                <Map challenge={userChallenge} />
              </div>
            </div>
          ) : (
            <div>
              <h2>Select a Challenge</h2>
              <select onChange={handleChallengeSelect}>
                <option value="">-- Select a Challenge --</option>
                {challenges.map((challenge) => (
                  <option key={challenge._id} value={challenge._id}>
                    {challenge.name}
                  </option>
                ))}
              </select>

              {selectedChallenge && (
                <>
                  <div style={{ marginTop: "20px" }}>
                    <h3>{selectedChallenge.name}</h3>
                    <p>{selectedChallenge.description}</p>
                    <p>
                      Distance: {selectedChallenge.distance} km | Difficulty:{" "}
                      {selectedChallenge.difficulty}
                    </p>
                    <button
                      onClick={() => handleRegister(selectedChallenge._id)}
                      style={{ padding: "10px 20px", cursor: "pointer" }}
                    >
                      Register
                    </button>
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    <Map challenge={selectedChallenge} />
                  </div>
                </>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

ChallengeSelector.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChallengeSelector;
