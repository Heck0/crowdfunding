import styles from "../styles/components/resultsCard.module.css";

type ResultCardProps = {
  title: string;
  text: string;
};

const ResultCard = ({ title, text }: ResultCardProps) => {
  return (
    <div className={styles.result}>
      <span className={styles.result__title}>{title}</span>
      <span className={styles.result__text}>{text}</span>
    </div>
  );
};

export default ResultCard;
