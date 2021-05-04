import { ReactNode } from "react";
import styles from "../styles/components/card.module.css";
import helpers from "../styles/helpers/helpers.module.css";

type CardProps = {
  style?: {};
  children: ReactNode;
};

const Card = ({ style, children }: CardProps) => {
  return (
    <section className={`${helpers.contentContainer} ${style && style}`}>
      <div className={styles.card}>{children}</div>
    </section>
  );
};

export default Card;
