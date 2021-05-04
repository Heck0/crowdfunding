import { useEffect, useState } from "react";
import { rewards, rewardTypes } from "../containers/About";
import Modal from "../containers/Modal";
import styles from "../styles/components/rewardModal.module.css";
import Card from "./Card";
import PledgeCard from "./PledgeCard";
import PledgeConfirmation from "./PledgeConfirmation";

export type pledgeSelectedTypes = {
  pledgePrice: number;
  pledgeTitle?: string;
};

type RewardModalProps = {
  currentPledgeTitle?: string;
};

const RewardModal = ({ currentPledgeTitle }: RewardModalProps) => {
  const [showContinueModal, setShowContinueModal] = useState<boolean>(false);
  const [pledgeSelected, setPledgeSelected] = useState<pledgeSelectedTypes>({
    pledgePrice: 0,
    pledgeTitle: currentPledgeTitle,
  });
  const [listOfPledges, setListOfPledges] = useState<rewardTypes[]>([]);

  useEffect(() => {
    const defaultPledge: rewardTypes = {
      title: "Pledge with no reward",
      pledge: undefined,
      text:
        "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
      nbLeft: 0,
    };

    setListOfPledges([defaultPledge, ...rewards]);
  }, []);

  const submitPledge = (e: any) => {
    e.preventDefault();
    setShowContinueModal((prevState) => !prevState);
  };

  return !showContinueModal ? (
    <Modal>
      <Card>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.titles}>
              <h2>Back this project</h2>
              <p>
                Want to support us in bringing Mastercraft Bamboo Monitor Riser
                out in the world?
              </p>
            </div>
          </div>

          <form onSubmit={submitPledge}>
            {listOfPledges &&
              listOfPledges.map(
                (
                  { title, pledge, text, nbLeft }: rewardTypes,
                  index: number
                ) => {
                  return (
                    <PledgeCard
                      key={index}
                      title={title}
                      pledge={pledge}
                      text={text}
                      nbLeft={nbLeft}
                      isSelected={title === pledgeSelected?.pledgeTitle}
                      setPledgeSelected={(currentPledge: pledgeSelectedTypes) =>
                        setPledgeSelected(currentPledge)
                      }
                      submitForm={submitPledge}
                    />
                  );
                }
              )}
          </form>
        </div>
      </Card>
    </Modal>
  ) : (
    <Modal centered>
      <Card>
        <PledgeConfirmation />
      </Card>
    </Modal>
  );
};

export default RewardModal;
