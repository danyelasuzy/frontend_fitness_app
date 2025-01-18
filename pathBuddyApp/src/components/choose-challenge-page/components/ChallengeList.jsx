import { useEffect, useState } from "react";
import ChallengeCard from "./ChallengeCard";
import styles from "./ChallengeList.module.css";
import Modal from "../../Modal/Modal";
import useModalManager from "../../Modal/useModalManager";
import LargeDarkGreenButton from "../../Buttons/LargeDarkGreen/LargeDarkGreenButton";

export const ChallengesList = () => {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // States for Modals
  const { isOpen, openModal, closeModal } = useModalManager(false);
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await fetch(
          "https://path-buddy-d047224ae5e0.herokuapp.com/api/challenges/getAllChallenges",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          }
        );

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || "Failed to load challenges.");
        }

        const data = await response.json();
        console.log("Challenges fetched successfully:", data);
        setChallenges(data.data.challenges);
      } catch (err) {
        console.error("Error fetching challenges:", err);
        setError(
          err.message || "Something went wrong. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  // Modal open handler
  const handleOpenModal = (challenge) => {
    setSelectedChallenge(challenge);
    openModal();
  };

  // Modal close handler
  const handleCloseModal = () => {
    setSelectedChallenge(null);
    closeModal();
  };

  if (loading) return <div>Loading challenges...</div>;
  if (error) return <div>{error}</div>;
  if (challenges.length === 0) return <div>No challenges found.</div>;

  return (
    <div className={styles.challengesList}>
      {challenges.map((challenge) => (
        <ChallengeCard
          key={challenge._id}
          challenge={challenge}
          onFindOutMore={() => handleOpenModal(challenge)}
        />
      ))}

      {/* Modal for detailed challenge info */}
      {isOpen && selectedChallenge && (
        <Modal
          onClose={handleCloseModal}
          contentClass={styles.customModalContent}
        >
          <div className={styles.selectedChallenge}>
            <h2>{selectedChallenge.name}</h2>
            <div className={styles.selectedCardImage}>
              <img src={selectedChallenge.img} alt={selectedChallenge.name} />
            </div>
            <p>{selectedChallenge.description}</p>
            <div className={styles.distanceSelected}>
              <p>
                <strong>Distance:</strong> {selectedChallenge.distance} km
              </p>
              <p>
                <strong>Difficulty:</strong> {selectedChallenge.difficulty}
              </p>
            </div>
            <div className={styles.customStartButton}>
              <LargeDarkGreenButton>Start Challenge</LargeDarkGreenButton>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ChallengesList;
