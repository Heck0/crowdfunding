import { ReactNode } from "react";
import styles from "../styles/containers/blackfilter.module.css";

type BlackFilterProps = {
  children: ReactNode;
};

const BlackFilter = ({ children }: Readonly<BlackFilterProps>) => {
  return <div className={styles.container}>{children}</div>;
};

export default BlackFilter;
