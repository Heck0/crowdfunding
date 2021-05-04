import { useContext, useState } from "react";
import styles from "../styles/components/introducer.module.css";
import Card from "../components/Card";
import bookmarkUnsaved from "../assets/images/icon-bookmark.svg";
import bookmarkSaved from "../assets/images/icon-bookmark-saved.svg";
import Button from "../components/Button";
import ModalContext from "../contexts/ModalContext";

const Introducer = () => {
  const { toggleModal } = useContext(ModalContext)!;
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  const handleBackProject = (e: any) => {
    e.preventDefault();
    setIsBookmarked(!isBookmarked);
  };

  return (
    <Card style={styles.margin__top}>
      <div className={styles.container}>
        <h1 className={styles.title}>Mastercraft Bamboo Monitor Riser</h1>
        <p className={styles.text}>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>

        <div className={styles.buttons}>
          <Button text="Back this project" onClick={toggleModal} />

          <button
            type="button"
            className={styles.bookmark}
            onClick={handleBackProject}
          >
            <img
              src={isBookmarked ? bookmarkSaved : bookmarkUnsaved}
              alt="Bookmark Icon"
            />
            <span
              className={`${isBookmarked ? styles.isBookmarked : undefined}`}
            >
              {isBookmarked ? "Bookmarked" : "Bookmark"}
            </span>
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Introducer;
