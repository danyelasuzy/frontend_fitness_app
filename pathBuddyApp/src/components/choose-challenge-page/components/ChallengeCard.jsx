import PropTypes from "prop-types";
import styles from "./ChallengeCard.module.css";
import SmallDarkGreenButton from "../../Buttons/SmallDarkGreen/SmallDarkGreenButton";

const ChallengeCard = ({ challenge, onFindOutMore }) => {
  return (
    <div className={styles.challengeCard}>
      <img
        src={challenge.img}
        alt={challenge.name}
        className={styles.challengeCardImage}
      />
      <div className={styles.challengeCardDetails}>
        <h2>{challenge.name}</h2>
        <p>
          <strong>Distance:</strong> {challenge.distance} km
        </p>
        <p>
          <strong>Difficulty:</strong> {challenge.difficulty}
        </p>
        <div className={styles.customButton}>
          <SmallDarkGreenButton onClick={onFindOutMore}>
            Find out more
          </SmallDarkGreenButton>
        </div>
      </div>
    </div>
  );
};

//Define propTypes
ChallengeCard.propTypes = {
  challenge: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    distance: PropTypes.number.isRequired,
    difficulty: PropTypes.string.isRequired,
  }).isRequired,
  onFindOutMore: PropTypes.func.isRequired,
};

export default ChallengeCard;
