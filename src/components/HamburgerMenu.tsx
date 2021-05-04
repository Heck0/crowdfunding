import styles from "../styles/components/hamburger.module.css";
import hamburger from "../assets/images/icon-hamburger.svg";
import closeButton from "../assets/images/icon-close-menu.svg";

type HamburgerProps = {
  menuActive: boolean;
  handleMenu: (e: any) => void;
};

const HamburgerMenu = ({ menuActive, handleMenu }: HamburgerProps) => {
  return (
    <div className={styles.hamburger__container}>
      <button type="button" onClick={handleMenu}>
        <img
          src={menuActive ? closeButton : hamburger}
          className={styles.hamburger}
          alt="Menu hamburger"
        />
      </button>
    </div>
  );
};

export default HamburgerMenu;
