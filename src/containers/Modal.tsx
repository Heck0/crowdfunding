import { ReactNode, useContext } from "react";
import styles from "../styles/containers/modal.module.css";
import BlackFilter from "./BlackFilter";
import CloseModalButton from "../assets/images/icon-close-modal.svg";
import ModalContext from "../contexts/ModalContext";

type ModalProps = {
  children: ReactNode;
  centered?: boolean;
};

const Modal = ({ children, centered = false }: ModalProps) => {
  const { toggleModal } = useContext(ModalContext)!;

  return (
    <BlackFilter>
      <div
        className={styles.container}
        style={
          centered ? { top: "50%", transform: "translateY(-50%)" } : undefined
        }
      >
        <button
          className={styles.closeModalButton}
          type="button"
          aria-label="close modal"
          onClick={toggleModal}
        >
          <img src={CloseModalButton} alt="Close modal button" />
        </button>
        {children}
      </div>
    </BlackFilter>
  );
};

export default Modal;
