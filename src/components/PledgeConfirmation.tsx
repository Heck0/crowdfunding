import { useContext } from "react";
import check from "../assets/images/icon-check.svg";
import ModalContext from "../contexts/ModalContext";
import styles from "../styles/components/pledgeConfirmation.module.css";
import Button from "./Button";

const PledgeConfirmation = () => {
  const { toggleModal } = useContext(ModalContext)!;

  return (
    <div className={styles.container}>
      <img src={check} alt="Icon Check" />

      <h2>Thanks for your support!</h2>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser wolrdwide. You will get an email once our campaign is
        completed.
      </p>

      <Button text="Got it!" onClick={toggleModal} />
    </div>
  );
};

export default PledgeConfirmation;
