import { useContext } from "react";
import { rewardTypes } from "../containers/About";
import styles from "../styles/components/reward.module.css";
import helpers from "../styles/helpers/helpers.module.css";
import Card from "./Card";
import Button from "./Button";
import ModalContext from "../contexts/ModalContext";

const Reward = ({ title, pledge, text, nbLeft }: rewardTypes) => {
  const { toggleModal } = useContext(ModalContext)!;

  return (
    <Card style={styles.container}>
      <div className={`${!nbLeft ? helpers.lowOpacity : ""}`}>
        <div className={styles.titles}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.pledge}>{`Pledge $${pledge} or more`}</span>
        </div>

        <p>{text}</p>

        <div className={styles.bottom}>
          <div className={styles.nbLeft}>
            <span className={styles.number}>{nbLeft}</span>
            <span className={styles.left}>left</span>
          </div>

          <Button
            active={!!nbLeft}
            text="Select Reward"
            onClick={toggleModal}
          />
        </div>
      </div>
    </Card>
  );
};

export default Reward;
