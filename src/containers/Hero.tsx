import styles from "../styles/containers/hero.module.css";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <div className={styles.container}>
      <Navbar />
    </div>
  );
};

export default Hero;
