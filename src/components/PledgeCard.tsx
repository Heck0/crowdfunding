import { rewardTypes } from "../containers/About";
import { pledgeSelectedTypes } from "./RewardModal";
import styles from "../styles/components/pledgeCard.module.css";
import helpers from "../styles/helpers/helpers.module.css";

import { useState } from "react";

interface PledgeCardsProps extends rewardTypes {
  isSelected: boolean;
  setPledgeSelected: (currentPledge: pledgeSelectedTypes) => void;
  submitForm: (e: any) => void;
}

const PledgeCard = ({
  title,
  pledge,
  text,
  nbLeft,
  isSelected,
  setPledgeSelected,
  submitForm,
}: PledgeCardsProps) => {
  const [pledgeAmount, setPledgeAmount] = useState<number>(0);
  const isSelectable: boolean = nbLeft > 0 || title === "Pledge with no reward";

  const currentPledge: pledgeSelectedTypes = {
    pledgePrice: pledgeAmount,
    pledgeTitle: title,
  };

  const renderPledgeInput = () => {
    return nbLeft ? (
      <div className={styles.pledgeContainer}>
        <span>Enter your pledge</span>

        <div className={styles.pledgeButtonsContainer}>
          <input
            type="number"
            onChange={(e) => setPledgeAmount(+e.target.value)}
            min={pledge}
            placeholder={pledge?.toString()}
            required
          />
          <button onClick={submitForm} className="btn">
            Continue
          </button>
        </div>
      </div>
    ) : (
      <button onClick={submitForm} className="btn">
        Continue
      </button>
    );
  };

  return (
    <div
      className={`${styles.container} ${!isSelectable ? helpers.lowOpacity : ""}
      ${isSelected ? styles.pledgeCardSelected : ""}`}
    >
      <label
        className={styles.customRadioButton}
        style={!isSelectable ? { cursor: "not-allowed" } : undefined}
        aria-label={title}
      >
        <input
          className={styles.radioInput}
          type="radio"
          value={title}
          checked={isSelected}
          onChange={() => isSelectable && setPledgeSelected(currentPledge)}
        />
        <span className={styles.checkmark}></span>

        <div className={styles.titlesContainer}>
          <span className={styles.title}>{title}</span>
          <span className={styles.pledge}>
            {pledge && `Pledge ${pledge} or more`}
          </span>
        </div>
      </label>

      <p>{text}</p>

      {isSelectable && !!nbLeft && (
        <>
          <span className={styles.nbLeft}>{!!nbLeft && nbLeft}</span>
          <span className={styles.left}>left</span>
        </>
      )}

      {isSelected && renderPledgeInput()}
    </div>
  );
};

export default PledgeCard;
